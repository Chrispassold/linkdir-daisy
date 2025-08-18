# Database Schema

This document provides a detailed definition of the database schema for the LinkDir project. It assumes the use of Supabase, where user authentication is handled by the `auth.users` table.

## 1. `profiles`
This table stores public user data that extends the built-in `auth.users` table.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `uuid` | **Primary Key**. A foreign key reference to `auth.users.id`. |
| `updated_at` | `timestamptz` | Tracks the last profile update. |
| `name` | `text` | The user's display name. (nullable) |
| `avatar_url` | `text` | URL for the user's avatar image. (nullable) |
| `stripe_customer_id`| `text` | The user's customer ID in Stripe for billing. (unique, nullable) |

## 2. `subscriptions`
Tracks the subscription status for each user, mirroring data from Stripe.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `uuid` | **Primary Key**. A foreign key reference to `profiles.id`. |
| `status` | `enum` | Subscription status: `trialing`, `active`, `canceled`, `past_due`, etc. |
| `stripe_subscription_id` | `text` | The subscription ID from Stripe. (unique) |
| `current_period_ends_at` | `timestamptz` | When the current billing period ends. |
| `cancel_at_period_end` | `boolean` | If the subscription is set to cancel at period end. |

## 3. `channels`
Stores the promotional channels created by users.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `uuid` | **Primary Key**. |
| `user_id` | `uuid` | **Foreign Key** to `profiles.id`. |
| `created_at` | `timestamptz` | Tracks when the channel was created. |
| `slug` | `text` | The unique URL identifier for the channel. (unique) |
| `title` | `text` | The main title of the channel. |
| `description` | `text` | A short description of the channel. (nullable) |
| `image_url` | `text` | URL for the channel's logo/image. (nullable) |
| `theme` | `text` | The name of the design theme applied to the channel. |

## 4. `links`
Stores the individual promotional items (links) within each channel.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `uuid` | **Primary Key**. |
| `channel_id` | `uuid` | **Foreign Key** to `channels.id`. |
| `created_at` | `timestamptz` | Tracks when the link was created. |
| `title` | `text` | The title of the promotional item. |
| `url` | `text` | The destination URL of the link. |
| `description` | `text` | A short description of the link. (nullable) |
| `category` | `text` | The category of the link (e.g., 'Electronics'). (nullable) |
| `promo_code` | `text` | An associated promo code. (nullable) |
| `image_url` | `text` | URL for an item-specific image. (nullable) |
| `expires_at` | `timestamptz` | The date and time when the link (promotion) expires. (nullable) |
| `sort_order` | `integer` | The position of the link in the list for sorting. |
| `clicks` | `integer` | A counter for link clicks. (default: 0) |

## 5. `link_reports`
Stores reports submitted by users against specific links.

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `uuid` | **Primary Key**. |
| `link_id` | `uuid` | **Foreign Key** to `links.id`. The reported link. |
| `reporter_user_id` | `uuid` | **Foreign Key** to `profiles.id`. The user who made the report. (nullable for anonymous reports) |
| `report_type` | `enum` | Predefined reason: `expired`, `wrong_category`, `wrong_value`, `inappropriate`, `other`. |
| `custom_message` | `varchar(200)` | Custom message if `report_type` is `other`. (nullable) |
| `status` | `enum` | The current status of the report: `pending`, `resolved`, `dismissed`. (default: `pending`) |
| `created_at` | `timestamptz` | Tracks when the report was submitted. |

---

## 6. DDL (Supabase/PostgreSQL) — MVP Baseline

Below is a reference DDL to create tables and enums consistently. Adjust as needed via migrations.

```sql
-- Enums
create type public.report_type as enum ('expired','wrong_category','wrong_value','inappropriate','other');
create type public.report_status as enum ('pending','resolved','dismissed');
create type public.subscription_status as enum ('trialing','active','canceled','past_due');

-- profiles
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  updated_at timestamptz default now(),
  name text,
  avatar_url text,
  stripe_customer_id text unique
);

-- subscriptions
create table if not exists public.subscriptions (
  id uuid primary key references public.profiles(id) on delete cascade,
  status public.subscription_status not null,
  stripe_subscription_id text unique,
  current_period_ends_at timestamptz,
  cancel_at_period_end boolean default false
);

-- channels
create table if not exists public.channels (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz default now(),
  slug text unique not null,
  title text not null,
  description text,
  image_url text,
  theme text not null
);

-- links
create table if not exists public.links (
  id uuid primary key default gen_random_uuid(),
  channel_id uuid not null references public.channels(id) on delete cascade,
  created_at timestamptz default now(),
  title text not null,
  url text not null,
  description text,
  category text,
  promo_code text,
  image_url text,
  expires_at timestamptz,
  sort_order integer default 0,
  clicks integer default 0
);

-- link_reports
create table if not exists public.link_reports (
  id uuid primary key default gen_random_uuid(),
  link_id uuid not null references public.links(id) on delete cascade,
  reporter_user_id uuid references public.profiles(id) on delete set null,
  report_type public.report_type not null,
  custom_message varchar(200),
  status public.report_status not null default 'pending',
  created_at timestamptz default now()
);
```

See `docs/SECURITY.md` for RLS policy examples.
