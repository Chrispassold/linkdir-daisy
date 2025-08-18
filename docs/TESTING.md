# Testing Strategy & Best Practices

This document defines the testing strategy, tools, and conventions for the LinkDir project to ensure code quality, reliability, and maintainability.

## 1. Testing Philosophy

We will follow the principles of the **Testing Pyramid**. This means we will have a healthy mix of tests, with a large base of fast unit tests, fewer integration tests, and a small number of broad end-to-end tests.

*   **Fast Feedback:** Tests must run quickly to provide immediate feedback to developers.
*   **Confidence:** The test suite should provide high confidence that the application works as expected.
*   **Clarity:** Tests should be easy to read and understand, serving as a form of documentation.

## 2. Testing Tools

| Type          | Tool                                                          | Description                                                                              |
|---------------|---------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Framework** | [**Vitest**](https://vitest.dev/)                               | A fast and modern testing framework for unit and integration tests.                      |
| **Components**| [**React Testing Library**](https://testing-library.com/react)  | For testing React components in a way that resembles how users interact with them.       |
| **E2E Tests** | [**Playwright**](https://playwright.dev/)                       | For end-to-end tests that simulate real user flows in a browser.                         |
| **Mocking**   | **Vitest Mocks**                                              | Built-in mocking capabilities for functions and modules.                                 |

## 3. Unit Tests

*   **Scope:** Test a single function, module, or component in complete isolation.
*   **Location:** Test files should be co-located with the source files using the `*.test.ts` or `*.test.tsx` naming convention.
*   **What to Test:**
    *   **Core Business Logic:** All use cases in `src/core/application/use-cases` must be thoroughly unit tested. Since they are decoupled from infrastructure, they should be easy to test.
    *   **Utility Functions:** All helper and utility functions in `src/lib`.
    *   **UI Components:** Test individual UI components in `src/components` for rendering, state changes, and event handling.
*   **Mocking:** All external dependencies (e.g., repository methods, API calls) must be mocked.

## 4. Integration Tests

*   **Scope:** Test the interaction between several units. This is particularly important for testing our infrastructure layer against our core business logic.
*   **What to Test:**
    *   **API Routes & Server Actions:** Test that they correctly call use cases and interact with the data layer.
    *   **Repository Implementations:** Test that our Supabase repository implementations correctly fulfill the contracts (ports) defined in the core application layer.
    *   **Filtering Logic:** Test that applying a category filter via URL query parameter correctly filters the list of links returned.
    *   **Feature Components:** Test complex components from `src/components/features` that orchestrate multiple UI components and hooks.

## 5. End-to-End (E2E) Tests

*   **Scope:** Test a complete user flow from start to finish, running against a real browser.
*   **Location:** E2E tests will live in a separate `e2e` directory at the root of the project.
*   **What to Test:** Critical user paths that are essential for the business to function.
    *   User registration and login flow.
    *   Creating a new channel.
    *   Adding, editing, and deleting a link.
    *   Reporting a link (both anonymous and logged-in).
    *   Managing a received report from the dashboard.
    *   The subscription and upgrade process.

## 6. Code Coverage

*   **Goal:** We aim for a code coverage of at least **80%** for the core business logic (`src/core`).

## 7. How to Run Tests (MVP)

Add the following npm scripts to `package.json` (reference):

```json
{
  "scripts": {
    "lint": "eslint .",
    "typecheck": "tsc -p tsconfig.json --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "e2e": "playwright test --reporter=list"
  }
}
```
*   **CI/CD:** Code coverage reports will be generated as part of our Continuous Integration (CI) pipeline to monitor our progress.
