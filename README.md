# NEXORA — Modern E-Commerce Platform

> **Shop Smarter. Live Better.**  
> A clean, modern, and production-grade e-commerce frontend application built with React, Vite, Tailwind CSS, and Fake Store API.

---

## 📌 Project Overview

**NEXORA** is a multi-page e-commerce web application crafted with a focus on minimalism, modern typography, responsive design, and intuitive user experience. It pulls real-time catalog data from the Fake Store API and provides end-to-end shopping workflows including real-time search, multi-criteria filtering, dedicated product details, shopping cart management with local storage persistence, simulated checkout, and contact form handling.

---

## 🛠️ Technology Stack

- **Framework & Build Tool:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** JavaScript (ES6+ / `.jsx`)
- **Routing:** [React Router v8](https://reactrouter.com/) (declarative `BrowserRouter`, `Routes`, `Route`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fi`)
- **Feedback & Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Data Source:** [Fake Store API](https://fakestoreapi.com/)
- **Code Linter:** [Oxlint](https://oxc.rs/)

---

## ✨ Features & Pages

### 1. Brand Identity & Global Layout
- **Brand Name:** **NEXORA** (Charcoal/Dark slate theme with vibrant `#F97316` orange accents).
- **Sticky Navbar:** Brand logo, primary navigation links, integrated live search bar, real-time cart item counter badge, and responsive mobile menu.
- **Scroll-to-Top:** Automatic scroll repositioning to page top on route transition.
- **Brand Footer:** Full navigation sitemap, customer support links, social media handles, guarantee badges, and copyright notice.

### 2. Home Page (`/`)
- **Hero Section:** High-impact value proposition, tagline, dual CTAs ("Shop Now", "Explore Collection"), and trust badges.
- **Featured Products:** Dynamically loads the top 8 curated products directly from Fake Store API.
- **Shop by Department:** Dedicated visual cards for Men's Clothing, Women's Clothing, Electronics, and Jewelry.
- **Promotional Offer Banner:** Highlight banner with call to action for seasonal sales.
- **Why Choose Us:** Trust pillars (Free Shipping, Secure Payment, Easy Returns, 24/7 Support).
- **Newsletter Subscription:** Interactive subscription input with client-side email validation and toast alerts.

### 3. All Products / Shop (`/shop`)
- **Product Grid:** Responsive multi-column layout showing image, title, price, star ratings, category tag, and action buttons.
- **Live Search:** Instant client-side title search.
- **Category Filter:** Filter by Men's Clothing, Women's Clothing, Electronics, and Jewelry.
- **Sorting Options:**
  - Price: Low to High
  - Price: High to Low
  - Alphabetical: A to Z
  - Alphabetical: Z to A
- **States:** Graceful loading spinners, error alerts with retry action, and zero-results fallback with quick filter reset.

### 4. Product Details (`/product/:id`)
- **Two-Column Layout:** High-resolution product image presentation beside product metadata.
- **Details & Specs:** Category pill, title, star rating, total review count, price, and description.
- **Interactive Controls:** Quantity selector (`+` / `-`), "Add to Cart", and "Buy Now" (which immediately navigates to cart).
- **Navigation:** One-click "Back to Shop" button.

### 5. Shopping Cart (`/cart`)
- **State Management:** Powered by React Context API (`CartContext`).
- **Persistence:** Syncs cart state with browser `localStorage` (`nexora_cart`) across sessions.
- **Features:**
  - Increase / decrease quantity or remove items.
  - "Clear Cart" quick action.
  - Automatic subtotal calculation.
  - Dynamic shipping fee ($5.99 standard, or **FREE** on orders over $50).
  - Empty cart state with "Continue Shopping" CTA.
  - Simulated "Proceed to Checkout" flow.

### 6. About Page (`/about`)
- Hero section introducing NEXORA's founding vision.
- Company narrative and impact statistics.
- Mission and vision statements.
- Core trust pillars explaining why customers trust the brand.

### 7. Services Page (`/services`)
- Service feature grid using React Icons:
  - Fast & Free Delivery
  - Secure Payment
  - Easy Returns & Refunds
  - Customer Support
  - Quality Products
  - Exclusive Offers
- Direct CTA link to customer assistance.

### 8. Contact Page (`/contact`)
- Contact info cards (email, 24/7 phone support, headquarters address, operating hours).
- Interactive contact form (Full Name, Email, Subject, Message) with form validation and feedback notifications.

### 9. 404 Not Found (`*`)
- Clean fallback screen with options to return to Home or browse the Shop.

---

## 📁 Project Architecture

```
NEXORA/
├── public/
│   └── favicon.svg           # Custom NEXORA SVG favicon
├── src/
│   ├── assets/               # Static assets & images
│   ├── components/           # Reusable UI elements
│   │   ├── CategoryCard.jsx  # Category teaser card
│   │   ├── ErrorMessage.jsx  # Error message & retry button
│   │   ├── Footer.jsx        # Shared responsive footer
│   │   ├── Hero.jsx          # Homepage hero section
│   │   ├── Loading.jsx       # Standardized loading indicator
│   │   ├── Logo.jsx          # Brand logo with icon and tagline
│   │   ├── Navbar.jsx        # Sticky navigation with search & cart
│   │   ├── Newsletter.jsx    # Newsletter subscription card
│   │   ├── ProductCard.jsx   # Product card component
│   │   ├── ProductGrid.jsx   # Grid container for products
│   │   ├── ScrollToTop.jsx   # Route-change scroll repositioning
│   │   └── ServiceCard.jsx   # Service highlight card
│   ├── context/
│   │   └── CartContext.jsx   # Global cart provider & local storage hook
│   ├── hooks/
│   │   └── useProducts.jsx   # API custom hooks with in-memory caching
│   ├── layouts/
│   │   └── MainLayout.jsx    # Shared layout wrapper (Navbar + Footer)
│   ├── pages/
│   │   ├── About.jsx         # About us page
│   │   ├── Cart.jsx          # Cart & order summary page
│   │   ├── Contact.jsx       # Contact form & store info
│   │   ├── Home.jsx          # Landing page
│   │   ├── NotFound.jsx      # 404 error page
│   │   ├── ProductDetails.jsx# Single product details page
│   │   ├── Services.jsx      # Services page
│   │   └── Shop.jsx          # Catalog, filter, sort, & search page
│   ├── routes/
│   │   └── AppRoutes.jsx     # Route configurations
│   ├── App.jsx               # App entry, router & providers
│   ├── index.css             # Tailwind CSS & base styling
│   └── main.jsx              # React DOM initialization
├── index.html                # App HTML template with SEO tags & fonts
├── package.json              # Dependencies and run scripts
├── vite.config.js            # Vite configuration with Tailwind CSS plugin
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or newer recommended) installed on your system.

### Installation
```bash
# Clone or navigate into the project directory
cd NEXORA

# Install dependencies
npm install
```

### Development Server
```bash
# Start local development server with HMR
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Linting
```bash
# Run Oxlint
npm run lint
```

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 API Reference

The project interfaces with the public [Fake Store API](https://fakestoreapi.com/):
- **All Products:** `GET https://fakestoreapi.com/products`
- **Product Details:** `GET https://fakestoreapi.com/products/{id}`
- **Categories:** `GET https://fakestoreapi.com/products/categories`

---

## 📄 License & Attribution

Designed and developed for NEXORA.  
© 2026 NEXORA. All rights reserved.
