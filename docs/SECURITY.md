# Security Best Practices

This document outlines the security rules and conventions that must be followed throughout the LinkDir project. The goal is to build a secure and trustworthy application by design.

## 1. Input Validation

*   **Always Validate and Sanitize Input:** Never trust user-provided data. All incoming data from any source (API requests, forms, URL parameters) must be strictly validated.
*   **Use Zod for Validation:** We will use [**Zod**](https://zod.dev/) to define schemas for all data validation. This applies to API route handlers, Server Action arguments, and form submissions.
*   **Reject Unknown Fields:** Schemas should reject fields that are not explicitly defined to prevent mass parameter assignment vulnerabilities.

## 2. Authentication & Authorization

*   **Leverage Supabase Auth:** All authentication logic (sign-up, sign-in, password reset) must be handled through the Supabase SDK. Do not build custom authentication flows.
*   **Protect Server-Side Logic:** All Server Actions and API routes that perform mutations or access sensitive data must explicitly check for an active user session and verify the user's identity.
*   **Authorization Checks:** Do not assume a user has the right to access a resource just because they are authenticated. For every operation, verify that the authenticated user is the owner of the resource they are trying to access or modify (e.g., a user can only edit their own page).

## 3. Database Security (Row Level Security)

*   **Enable Row Level Security (RLS):** RLS must be enabled on all tables in Supabase that contain sensitive or user-specific data.
*   **Define Strict Policies:** For each table, define policies that enforce access control at the database level. The default policy should be "deny." Explicitly grant access for specific operations (SELECT, INSERT, UPDATE, DELETE).
*   **Policies Based on `auth.uid()`:** RLS policies should primarily be based on the `auth.uid()` function to ensure users can only access their own data.

### 3.1. RLS Policy Examples (SQL)

The following examples assume:
- `profiles.id = auth.users.id`
- `channels.user_id` references `profiles.id`
- `links.channel_id` references `channels.id`
- Anonymous reports are allowed (with `reporter_user_id` null)

```sql
-- PROFILES
alter table public.profiles enable row level security;

-- Only the owner can select/update their profile
create policy "profiles_owner_select"
  on public.profiles for select
  using ( id = auth.uid() );

create policy "profiles_owner_update"
  on public.profiles for update
  using ( id = auth.uid() )
  with check ( id = auth.uid() );

-- Admin role can manage all (optional)
-- create policy "profiles_admin_all" on public.profiles for all using ( auth.role() = 'service_role' );

-- CHANNELS
alter table public.channels enable row level security;

-- Public read (channels are public by default)
create policy "channels_public_read"
  on public.channels for select
  using ( true );

-- Owner can insert/update/delete own channels
create policy "channels_owner_cud"
  on public.channels for all
  using ( user_id = auth.uid() )
  with check ( user_id = auth.uid() );

-- LINKS
alter table public.links enable row level security;

-- Public read (links are publicly viewable)
create policy "links_public_read"
  on public.links for select
  using ( true );

-- Channel owner can manage links of their channels
create policy "links_owner_cud"
  on public.links for all
  using (
    exists (
      select 1 from public.channels c
      where c.id = links.channel_id and c.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.channels c
      where c.id = links.channel_id and c.user_id = auth.uid()
    )
  );

-- LINK REPORTS
alter table public.link_reports enable row level security;

-- Public read for moderation transparency (optional)
create policy "link_reports_owner_read"
  on public.link_reports for select
  using (
    -- Reporter can see their own reports
    (reporter_user_id is not null and reporter_user_id = auth.uid())
    -- Channel owner can see reports about their links
    or exists (
      select 1 from public.links l
      join public.channels c on c.id = l.channel_id
      where l.id = link_reports.link_id and c.user_id = auth.uid()
    )
  );

-- Anyone can create a report
create policy "link_reports_insert_any"
  on public.link_reports for insert
  with check (
    -- anonymous user: must not set reporter_user_id
    (auth.uid() is null and reporter_user_id is null)
    -- authenticated user: must set self as reporter
    or (auth.uid() is not null and reporter_user_id = auth.uid())
  );

-- Only channel owner can update status; reporter can update their own custom_message
create policy "link_reports_update"
  on public.link_reports for update
  using (
    -- channel owner can update any report of their links
    exists (
      select 1 from public.links l
      join public.channels c on c.id = l.channel_id
      where l.id = link_reports.link_id and c.user_id = auth.uid()
    )
    or (reporter_user_id = auth.uid())
  );
```

## 4. XSS (Cross-Site Scripting) Prevention

*   **Leverage Framework Protections:** React and Next.js provide built-in protection against XSS by automatically escaping data rendered in JSX. Do not circumvent this.
*   **Avoid `dangerouslySetInnerHTML`:** Never use the `dangerouslySetInnerHTML` prop. If there is an absolute need, it must be subject to a rigorous security review.
*   **Sanitize User-Generated Content:** For any user-generated content that needs to be rendered as HTML, it must be passed through a robust sanitization library like [**DOMPurify**](https://github.com/cure53/DOMPurify).

## 5. Web Security Headers & CSRF/CORS

*   **CSP:** Define a strict Content Security Policy (CSP) to mitigate XSS and data exfiltration.
*   **CORS:** Restrict origins to trusted domains in API routes.
*   **CSRF:** Prefer SameSite=strict cookies; for state-changing requests from browsers, include CSRF tokens when applicable.

## 6. Abuse Prevention & Rate Limiting

*   **Rate Limit:** Apply server-side rate limits to sensitive endpoints (e.g., report creation, redirect tracking) to prevent abuse.
*   **Captcha:** Consider CAPTCHA for high-risk anonymous actions.

## 5. Secrets Management

*   **Use Environment Variables:** All secrets (API keys, database connection strings, etc.) must be stored in environment variables.
*   **Never Commit Secrets:** The `.env.local` file must be included in `.gitignore` and never be committed to the repository.
*   **Next.js Environment Variables:**
    *   Server-side secrets should be defined in `.env.local` (e.g., `STRIPE_SECRET_KEY`).
    *   Public, client-side keys must be prefixed with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_SUPABASE_ANON_KEY`). Be extremely careful about what is exposed to the client.

## 7. Dependency Management

*   **Audit Dependencies:** Regularly audit third-party packages for known vulnerabilities using `yarn audit`.
*   **Keep Dependencies Updated:** Regularly update dependencies to their latest stable versions to receive security patches.
*   **Use Trusted Packages:** Only use well-maintained and trusted packages from reputable sources.

---
By adhering to these principles, we can significantly reduce the application's attack surface.
