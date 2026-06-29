# AgriSmart AI 🌿🚜

## Multi-Agent Intelligent Farmer Coordination & Crop Advisory Platform

### Intern Details

* **Name:** Mohit Singh
* **Intern ID:** TBI-26101085
* **Program:** TBI-GEU Summer Internship Program 2026
* **Domain:** AI-Assisted Full Stack Web Development

---

## Project Overview

AgriSmart AI is a responsive web-based platform designed to help farmers and agricultural collectives manage crop coordination and improve decision-making using AI-powered assistance. The platform provides features such as crop advisory support, harvest readiness tracking, weather-based recommendations, and centralized communication between farmer groups and commercial buyers.

This project demonstrates:

* Responsive web design using Next.js and Tailwind CSS
* Component-based architecture
* Reusable UI components
* Multi-page routing and navigation
* Mobile-first layouts optimized for field use
* Dark/Light mode support
* Component library implementation

---

## Features Implemented

###  Deliverables

✅ Responsive Navigation Bar with integrated routing

✅ Reusable Hero Section Component with metric highlights

✅ Reusable Card Component for platform features

✅ Reusable Footer Component

✅ Home Page (Interactive feature grid & How-It-Works section)

✅ Dashboard Page (Coordination and harvest tracking placeholder)

✅ Advisory Page (AI chatbot interface placeholder)

✅ Login Page (Farmer/Buyer authentication placeholder)

✅ Fully Mobile-Responsive Design
 
✅ Developed RESTful Backend API using Node.js and Express.

✅ Implemented full CRUD operations (Create, Read, Update, Delete) for Crop Inventory.

✅ Integrated Frontend with Backend using Fetch API with real-time data binding.

✅ Added dynamic loading states and error handling via Toast notifications.

✅ Configured CORS for secure cross-origin resource communication.

✅ Postman/Thunder Client testing collection completed for all endpoints.

---

### Week 3 Deliverables

✅ Figma Wireframes for all major screens

✅ Reusable UI Component Library

✅ Button Component (Primary, Secondary, Outline)

✅ Input Component (Label, Placeholder, Validation)

✅ Modal Component (Open/Close, Escape Key, Focus Trap)

✅ Toast Notifications using react-hot-toast

✅ Loader Component for async states

✅ Clean exports via index.js

✅ Dark/Light Mode Toggle with localStorage persistence

✅ Settings Page Implementation

✅ Responsive Testing across 3 breakpoints (375px, 768px, 1440px)

✅ Full Dark Mode support across all pages

---

## Project Structure

```text
agrismart-ai/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── about/
│   │   └── page.jsx
│   ├── advisory/
│   │   └── page.jsx
│   ├── dashboard/
│   │   └── page.jsx
│   ├── login/
│   │   └── page.jsx
│   └── settings/
│       └── page.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Providers.jsx
│   ├── ThemeContext.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Modal.jsx
│       ├── Toast.jsx
│       ├── Loader.jsx
│       └── index.js
│
├── public/
│
└── README.md
```

---

## Technologies Used

* Next.js
* React
* Tailwind CSS
* Git & GitHub
<<<<<<< HEAD
* Node.js/Express (Backend),Postman (API Testing)
=======
* react-hot-toast
* Lucide React
* Context API
* Upcoming: Node.js/Express (Backend)
>>>>>>> 39686a2afdcc5d7fa935819c11e849ec56868a21
* PostgreSQL via Supabase (Database)

---

## Screenshots

### Home Page (Desktop)

Responsive landing page featuring:

* Impactful Hero section with platform statistics
* 4-column feature grid (Advisory, Weather, Harvest, Buyers)
* Step-by-step **How It Works** guide
* Navigation bar
* Footer

### Home Page (Mobile)

Mobile-friendly layout optimized for smartphones with:

* Stacked single-column content
* Responsive cards
* Optimized navigation menu

### Dashboard Page

Dashboard placeholder prepared for:

* Regional harvest readiness tracking
* Expected yield analytics
* Active farmer metrics
* Open buyer requests

### Settings Page

New settings page featuring:

* Theme preferences
* Notification settings
* Language selection
* Account controls

---

## GitHub Repository

Repository Link:

[AgriSmart AI Repository](https://github.com/MOHIT-conqueror/AgriSmart-AI-WebApp)

---

## Running the Project

1. Clone the repository: `git clone <repo-url>`
2. **Setup Backend**:
   - Navigate to the backend folder: `cd backend`
   - Install dependencies: `npm install`
   - Start server: `node server.js` (runs on http://localhost:5000)
3. **Setup Frontend**:
   - Navigate to the root directory: `cd ..`
   - Install dependencies: `npm install`
   - Start app: `npm run dev` (runs on http://localhost:3000)

---

## Future Enhancements

* Integration of an LLM API for AI-powered crop advisory chatbot
* PostgreSQL database setup via Supabase for user profiles and harvest tracking
* Real-time weather API integration for localized farming recommendations
* Active buyer and farmer communication management system
* Interactive charting for harvest readiness trends
* Harvest demand forecasting using AI

---

## Author

**Mohit Singh**

TBI-GEU Summer Internship Program 2026
