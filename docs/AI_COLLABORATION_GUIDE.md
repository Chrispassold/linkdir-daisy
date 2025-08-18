# AI Collaboration Guide: Development Protocol

This document outlines the protocol for the AI assistant when planning and implementing development tasks for the LinkDir project. The primary goal is to ensure every action is deliberate, consistent, and adheres to the established architectural and quality standards.

Note on language and product naming:
- Product name: LinkDir
- Platform/UI language: pt-BR
- Documentation and code/comments: en-US

## 1. Core Principles (The "Prime Directives")

Before any action is taken, the AI must ensure its plan aligns with these core principles, referencing the project's documentation as the single source of truth:

1.  **Adhere to the Vision:** Does the request align with the project's goals as defined in `VISION.md`?
2.  **Respect the Features:** Is the task part of a defined feature in `FEATURES.md`? If not, clarify how it fits into the roadmap.
3.  **Uphold the Architecture:** All code must be placed in the correct layer as defined in `ARCHITECTURE.md` and the `STYLE_GUIDE.md` directory structure. The Dependency Rule (dependencies point inwards) is non-negotiable.
4.  **Follow the Style Guide:** All code, naming conventions, and patterns must adhere to `STYLE_GUIDE.md`.
5.  **Prioritize Security:** Security is not an afterthought. All development must follow the rules in `SECURITY.md`.
6.  **Test Everything:** All new logic must be accompanied by tests as defined in `TESTING.md`.

## 2. Step-by-Step Implementation Process

For any given development command (e.g., "Implement the 'add link to channel' feature"), the AI will follow this explicit process:

**Step 1: Deconstruct the Request & Plan the Work**
1.  Acknowledge the command and verbalize a clear understanding of the goal.
2.  Consult all relevant documentation (`.md` files) to gather context and constraints.
3.  Create a detailed, step-by-step plan using the "Todo" list feature. This plan will explicitly show the order of implementation, following the Clean Architecture "inside-out" approach.

**Step 2: Implement "Inside-Out" (Clean Architecture)**
The AI will implement features by starting from the core and moving to the outer layers.

1.  **Core Logic (The "What"):**
    *   **Domain/Entities (`/core/domain`):** Define or update the business entities if necessary.
    *   **Ports (`/core/application/ports`):** Define the interfaces for any new repository or service methods required.
    *   **Use Cases (`/core/application/use-cases`):** Write the business logic for the feature. This contains *what* the application does.

2.  **Unit Testing the Core:**
    *   Immediately after writing a use case, write unit tests for it. The use case must be fully tested and passing *before* moving to the next layer.

3.  **Infrastructure & Adapters (The "How"):**
    *   **Repositories (`/infrastructure/data`):** Implement the repository ports defined in Step 2, writing the actual database query logic (e.g., using Supabase SDK).
    *   **Other Services (`/infrastructure/*`):** Implement any other necessary infrastructure, like payment gateway logic.

4.  **Presentation Layer (The "Entrypoint"):**
    *   **Server Actions/API (`/app/api` or Server Actions):** Create the server-side entrypoint that will call the use case. This layer is responsible for input validation (using Zod), authentication checks, and calling the appropriate use case.
    *   **UI Components (`/components`):** Build the necessary React components for the feature, following `shadcn/ui` best practices.

**Step 3: Integration & End-to-End Testing**
1.  **Integration Tests:** Write tests to ensure the presentation layer correctly interacts with the use cases and that the infrastructure implementations behave as expected.
2.  **E2E Tests:** For significant features, create a Playwright test to simulate the entire user flow.

**Step 4: Final Review and Completion**
1.  Review all created/modified files to ensure they align with all documentation.
2.  Mark the "Todo" items as complete.
3.  Confirm with the user that the task is finished and await the next command.

---
By following this protocol, the AI ensures a systematic, high-quality, and predictable development process.
