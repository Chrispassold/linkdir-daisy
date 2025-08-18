# Style Guide & Conventions

This document defines the coding style, patterns, and conventions to be followed in the LinkDir project. The goal is to ensure code consistency, readability, and maintainability.

## 1. Design System & Theme

The visual identity of the project is defined by the **modern** theme from daisyUI. This theme must be used as the foundation for all visual components.

*   **Theme Source:** [daisyUI Modern Theme](https://daisyui.com/themes/)
*   **Fonts:**
    *   **Sans-serif:** `Inter`
    *   **Serif:** `Source Serif 4`
    *   **Monospaced:** `JetBrains Mono`
*   **Consistency:** All colors, spacing, radius, and other design tokens must be sourced from daisyUI's semantic color system and CSS variables. Avoid using hard-coded or arbitrary values to ensure a consistent user experience.
*   **Semantic Colors:** Use daisyUI's semantic color system:
    *   `primary`: Main brand color
    *   `secondary`: Secondary brand color
    *   `accent`: Accent color for highlights
    *   `neutral`: Neutral/gray colors
    *   `base-100/200/300`: Background colors
    *   `info/success/warning/error`: State colors

## 2. General Principles

*   **Package Manager:** The official package manager for this project is **Yarn**. All package management commands (`yarn add`, `yarn remove`, `yarn install`) should use Yarn. Do not use `npm` or `pnpm`.
*   **Language:** All code, comments, and documentation will be written in **English (en-US)**. All platform/UI copy shown to end users must be **pt-BR**.
*   **Formatting:** We use **Prettier** for automatic code formatting. All code should be formatted before being committed.
*   **Linting:** We use **ESLint** to catch common errors and enforce style rules.
*   **Path Aliases:** All imports must use the `@/` path alias instead of relative paths for cleaner and more maintainable code.
    *   **Correct:** `import { Button } from '@/components/ui/Button';`
    *   **Incorrect:** `import { Button } from '../../components/ui/Button';`

## 3. Tailwind CSS Best Practices

To keep our HTML clean and our styles maintainable, we will follow these principles for using Tailwind CSS v4.

*   **1. Prioritize Component Encapsulation:** The primary strategy for style reuse is to create well-defined React components. Instead of repeating class strings, build a component once and reuse it.
    *   *Example:* Create a `<Button>` component with all necessary variants (primary, secondary, etc.) and reuse that component throughout the application.

*   **2. Use `@apply` Sparingly for Base Component Classes:** For a small set of highly reusable, foundational UI elements (like buttons, form inputs, or cards), we can use `@apply` within a global CSS file (`src/app/globals.css`) to create reusable component classes. This should be reserved for elements that form the core of the design system.
    *   *Example (`globals.css`):*
        ```css
        @layer components {
          .btn-primary {
            @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
          }
          .card {
            @apply p-4 bg-white rounded-lg shadow-md;
          }
        }
        ```

*   **3. Leverage `tailwind.config.js` for Design Tokens:** Do not hard-code values. All design system tokens (colors, spacing, fonts, etc.) should be defined in `tailwind.config.js`. This ensures consistency and makes global style changes easy.
    *   *Example (`tailwind.config.js`):*
        ```javascript
        module.exports = {
          theme: {
            extend: {
              colors: {
                primary: '#3490dc',
                secondary: '#ffed4a',
              },
            },
          },
        };
        ```

*   **4. Avoid Premature Abstraction:** Do not create a component class for every small pattern. Only abstract when you see a clear, repeated pattern emerging. Utility-first is the default; component classes are the exception for well-established patterns.

## 4. Next.js 15 Best Practices

*   **1. Embrace the App Router:** All new pages and routes should be built using the App Router (`/src/app`). Avoid the old `pages` directory.
*   **2. Server Components by Default:**
    *   Components are Server Components by default. Keep them this way unless you need client-side interactivity.
    *   Perform data fetching directly within Server Components.
*   **3. Use Client Components Sparingly:**
    *   Add the `"use client"` directive only at the top of files for components that require interactivity.
    *   Push client components to the "leaves" of your component tree.
*   **4. Use Server Actions for Mutations:**
    *   For form submissions and data mutations, use Server Actions. This co-locates your mutation logic with your component.
    *   Leverage `useOptimistic` (from React 19) in client components to provide instant feedback to the user while the server action is processing. This creates a much smoother UX.
*   **5. Stream UI with React Suspense:** For pages with slow data fetches, use React Suspense's `<Suspense>` boundary to stream UI to the user, improving perceived performance.
*   **6. Use the `use` Hook:** Prefer the new `use` hook from React 19 for reading promises or context in client components over `useEffect` or render props where applicable.

## 5. Naming Conventions

*   **Components:** PascalCase (e.g., `LinkCard`, `UserProfile`).
*   **Files:**
    *   React Components: PascalCase (e.g., `LinkCard.tsx`).
    *   API Routes & Pages: kebab-case (e.g., `user-profile.tsx`, `api/update-link.ts`).
    *   Other files: camelCase (e.g., `dbUtils.ts`).
*   **Variables & Functions:** camelCase (e.g., `const userLinks = ...`, `function getUserProfile()`).
*   **Constants:** SCREAMING_SNAKE_CASE (e.g., `const MAX_LINKS_PER_PAGE = 20;`).
*   **API Endpoints:** Use kebab-case and represent resources clearly (e.g., `/api/users/me`, `/api/pages/{slug}/links`).

## 6. Component Architecture & daisyUI Best Practices

*   **1. Use Functional Components:** All React components must be functional components using hooks. Class components are not to be used.
*   **2. Component Organization:**
    *   **Base Components:** Use daisyUI's component classes directly in your JSX for basic UI elements (e.g., `btn`, `card`, `modal`).
    *   **Feature Components:** Create feature-specific components in `src/components/features` that compose daisyUI components.
    *   *Example:* To create a "Delete Page" button, create a new component `DeletePageButton.tsx` in the `features` directory that uses daisyUI's `btn` class with appropriate modifiers.
*   **3. Composition & Customization:**
    *   **DO** use daisyUI's modifier classes to customize components (e.g., `btn-primary`, `btn-outline`).
    *   **DO** combine daisyUI classes with Tailwind utilities for fine-tuning.
    *   **DO** create reusable React components that encapsulate common daisyUI patterns.
    *   *Example:*
    ```tsx
    // src/components/features/DeletePageButton.tsx
    export const DeletePageButton = ({ onClick }: { onClick: () => void }) => (
      <button 
        className="btn btn-error btn-outline" 
        onClick={onClick}
      >
        Delete Page
      </button>
    );
    ```
*   **4. Props Typing:** Use TypeScript interfaces for defining component props, following the convention `ComponentNameProps`.
*   **5. Creating Custom Components:**
    *   Leverage daisyUI's base components and utilities as building blocks.
    *   Ensure components are accessible with proper ARIA attributes.
    *   Use daisyUI's semantic color system for consistent theming.
    *   Maintain responsive design using daisyUI's built-in responsive classes.

## 7. TypeScript Usage

*   **Strict Mode:** Enable strict mode in `tsconfig.json`.
*   **Type Everything:** Provide explicit types for function parameters, return values, and variables where type inference is not obvious. Avoid using `any` wherever possible.
*   **API Responses:** Define interfaces for API request bodies and response payloads to ensure type safety between the frontend and backend.

## 8. Directory Structure (Clean Architecture)

The directory structure is designed to enforce the separation of concerns mandated by Clean Architecture.

```
src/
  app/                           # Next.js App Router
    (public)/                    # Public pages (Server Components by default)
    api/                         # API routes or server actions
    globals.css                  # Global styles (Tailwind + daisyUI)
  components/                    # UI Components
    features/                    # Feature-specific components using daisyUI
  core/                          # Clean Architecture core
    domain/                      # Entities and value objects
      entities/
    application/
      ports/                     # Repository/service interfaces (ports)
      use-cases/                 # Interactors/business logic
  infrastructure/                # Implementations (adapters)
    data/
      supabase/                  # Supabase repositories implementing ports
    services/                    # External services (e.g., Stripe)
  lib/                           # Utilities/helpers
  types/                         # Shared TypeScript types
tests/
  unit/
  integration/
e2e/
  playwright.config.ts
``` 