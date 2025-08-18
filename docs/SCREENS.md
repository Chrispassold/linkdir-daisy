# MVP Screen Definitions

This document lists and describes all the necessary screens (views/pages) to be implemented for the MVP.

## 1. Public-Facing Screens (Unauthenticated)

These screens are accessible to all visitors.

### 1.1. Landing Page
*   **Route:** `/`
*   **Purpose:** Introduce the product and provide a CTA for sign up.

### 1.2. User's Promotion Channel
*   **Route:** `/{slug}`
*   **Purpose:** The main public page that displays a user's channel profile. Includes a UI element for filtering links by category. Each link card links to the Link Detail Page and includes a **Share Icon**.

### 1.3. Link Detail Page
*   **Route:** `/{slug}/link/{link_id}`
*   **Purpose:** Displays full details of a link (offer), a QR Code, and a Report Button. Also includes a prominent **Share Icon**.

## 2. Authentication Screens

These screens handle the user sign-up and sign-in process.

### 2.1. Sign In Page
*   **Route:** `/signin`
*   **Purpose:** Allows existing users to log in via their chosen method (email/password or Google OAuth).

### 2.2. Sign Up Page
*   **Route:** `/signup`
*   **Purpose:** Allows new users to create an account.

## 3. User Dashboard Screens (Authenticated)

These screens are part of the user's private dashboard for managing their content.

### 3.1. Main Dashboard
*   **Route:** `/dashboard`
*   **Purpose:** Central hub after login. Provides an overview of the user's created channels, allowing them to select one to manage.

### 3.2. Channel Management View
*   **Route:** `/dashboard/channels/{channel_id}`
*   **Purpose:** Displays a comprehensive list or table of all links for a specific channel. This view provides the owner with all relevant link information at a glance (e.g., title, category, clicks, expiration date) and includes indicators for links with pending reports. Each row will have controls to edit or delete the link.

### 3.3. Link Editor (Create/Edit)
*   **Route:** `/dashboard/channels/{channel_id}/links/new` and `/dashboard/channels/{channel_id}/links/{link_id}/edit`
*   **Purpose:** A form for creating or editing a promotional link. Includes a **category selector** (e.g., a dropdown) field.

### 3.4. Channel Settings
*   **Route:** `/dashboard/channels/{channel_id}/settings`
*   **Purpose:** A form where users can edit their channel-specific details.

### 3.5. Account Settings
*   **Route:** `/dashboard/account`
*   **Purpose:** Allows users to update their global profile information.

### 3.6. Billing & Subscription Page
*   **Route:** `/dashboard/billing`
*   **Purpose:** Displays the user's current subscription plan and manages upgrades/billing.
