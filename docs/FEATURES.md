# Features for MVP

This document outlines the core features for the Minimum Viable Product (MVP). The primary focus is on providing a robust tool for creators to build and manage their promotional channels.

## 1. User Account Management
*   **1.1. User Registration:** Users sign up to create and manage channels.
*   **1.2. User Login:** Registered users can log in to their dashboard.
*   **1.3. Profile Management:** Users can update their profile information.

## 2. Channel Management
*   **2.1. Unique Channel URL:** Each user gets one channel on the Free plan.
*   **2.2. Multiple Channels (Pro Plan):** Pro users can create multiple channels.
*   **2.3. Channel Customization:** Users can customize their channel's title, description, image, and theme.

## 3. Link Management
*   **3.1. Add Promotional Link:** Users can add links to their channels with a title, URL, promo code, description (Markdown), expiration date, image, and a **category**.
*   **3.2. Edit & Delete Link:** Users can modify or remove existing links.
*   **3.3. Reorder Links:** Users can reorder their links.
*   **3.4. Link Reporting:** Any user (logged-in or anonymous) can report links.
    *   **Report Reasons (UI labels in pt-BR):** `expired`, `wrong_category`, `wrong_value`, `inappropriate`, `other`.
    *   **Custom Reason:** A "Other" option will allow users to provide a custom message (up to 200 characters).
    *   **Moderation:** Reports will be visible in the channel owner's dashboard for them to take action (e.g., edit or delete the link).

## 4. Public Viewing
*   **4.1. QR Code for Links:** A QR code is generated for each link for easy sharing.
*   **4.2. Public Channel View:** A clean, mobile-first page that displays a channel's profile and its list of links. Includes **category filters** that modify the URL with query parameters (e.g., `/{slug}?category=electronics`).
*   **4.3. Link Detail Page:** A dedicated page (`/{slug}/link/{link_id}`) for each link.
*   **4.4. Share Functionality:** Each link will have a share icon, allowing users to easily copy the link to the link detail page.
*   **4.5. Click Tracking:** All clicks on links are tracked. This is achieved by routing all external links through an internal redirect URL (`/redirect/{link_id}`) which increments a counter before forwarding the user.

## 5. Categories
Below is a suggested list of initial categories for the platform (UI labels in pt-BR; documentation uses en-US names). This list can be expanded in the future.
*   Electronics
*   Fashion & Accessories
*   Home & Kitchen
*   Beauty & Personal Care
*   Books & Stationery
*   Food & Beverages
*   Sports & Leisure
*   Travel & Lodging
*   Games & Consoles
*   Computers & IT
*   Tools & Construction
*   Toys & Games
*   Automotive
*   Pet Shop
*   Health & Wellness
*   Other

## 6. Subscription Tiers & Billing
*   **6.1. Plan Tiers:** A Free plan (1 channel) and a Pro plan (multiple channels).
*   **6.2. Upgrade to Pro:** A simple checkout process for upgrading.
*   **6.3. Billing Management:** A portal for users to manage their subscription.
