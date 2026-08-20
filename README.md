# NexStay - Smart Hostel Management System

NexStay is a modern, responsive web application designed for educational institutions to streamline hostel operations. It centralizes student resident services, warden supervision, and administrative management into a unified platform.

---

## Table of Contents

- About The Project
- Key Portals
- Core Features
- Technology Stack
- Project Directory Structure
- Getting Started
  - Prerequisites
  - Installation
  - Running Locally
- Usage Guide
- Configuration
- License

---

## About The Project

Traditional hostel management relies on paper registers, manual gate pass verification, and disjointed communication channels. NexStay provides a digital alternative that manages room allocations, attendance, digital out-passes, mess billing, maintenance requests, and administrative analytics in real time.

Developed for Invertis University, Bareilly, Uttar Pradesh, India, as a comprehensive campus management solution.

---

## Key Portals

### 1. Public Landing Page (`index.html`)
- Interactive showcase of hostel facilities, pricing plans, and room tiers.
- Live room allotment inquiry and contact forms.
- Frequently Asked Questions (FAQ) with category filtering.
- Direct quick-access authentication modals for students, wardens, and administrators.

### 2. Student Resident Portal (`dashboard.html`)
- Room allocation and roommate details.
- Digital Gate Pass / Leave Application submission with real-time approval status.
- Complaint and maintenance ticketing system with category tracking.
- Weekly mess meal menu and meal attendance tracking.
- Fee payment history, invoices, and payment receipts.
- Personal profile and emergency contact management.

### 3. Warden Operations Portal (`warden.html`)
- Block-wise student directory and occupancy monitoring.
- Gate Pass review queue with instant Approve / Reject controls.
- Incident and discipline log management.
- Real-time room inspection and roll-call checklist.
- Broadcast notice publishing for hostellers.

### 4. Administrator Control Panel (`admin.html`)
- Campus-wide analytics dashboard (Total Capacity, Occupancy Rate, Revenue, Active Passes).
- Interactive occupancy and fee collection charts powered by Chart.js.
- Hostel Block, Room, and Inventory management.
- Staff access assignment and role management.
- Data export capabilities (CSV report downloads).

---

## Core Features

- Multi-Role Access: Tailored interfaces for Students, Wardens, and Admins.
- Gate Pass Workflow: Digital application and authorization system with QR/reference verification.
- Maintenance Desk: Status tracking (Pending, In Progress, Resolved) for electrical, plumbing, and carpentry complaints.
- Responsive Design: Optimized layout supporting mobile phones, tablets, and desktop workstations.
- Theme Support: Built-in Light and Dark mode options stored in browser local storage.
- Local Storage Persistence: Client-side storage ensures custom entries, passes, and preferences persist across sessions without external database setup.
- SEO and Performance Optimized: Asynchronous resource loading, preconnected font origins, and mobile viewport compliance.

---

## Technology Stack

- Frontend: HTML5, CSS3 (Custom Variables, Flexbox, Grid), JavaScript (Vanilla ES6+)
- Styling & Icons: Modern typography with Google Fonts (Outfit), Font Awesome Icon Library
- Data Visualization: Chart.js (Admin analytics and occupancy trends)
- Backend / Server: Node.js, Express.js
- Package Management: npm / bun

---

## Project Directory Structure

```text
nexstay-hostel-management/
├── admin.html              # Administrator Control Center
├── dashboard.html          # Student Resident Dashboard
├── index.html              # Landing Page & Portal Gateway
├── warden.html             # Warden Management Portal
├── hostel_inventory.csv    # Sample hostel inventory dataset
├── metadata.json           # Application metadata and attributes
├── package.json            # Node.js project configuration and scripts
├── server.js               # Express static file server
├── css/
│   └── style.css           # Global stylesheet, design tokens, responsive rules
└── js/
    └── script.js           # Core application logic, role management, state handlers
```

---

## Getting Started

### Prerequisites

Ensure you have Node.js (version 18.x or higher) installed on your system.

To check your Node.js version:
```bash
node -v
npm -v
```

### Installation

1. Clone or download the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/nexstay.git
   cd nexstay
   ```

2. Install the required Node dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the local development server:

```bash
npm run dev
```
or
```bash
npm start
```

Open your browser and navigate to:
```text
http://localhost:3000
```

---

## Usage Guide

1. Landing Page: Navigate through the features, explore available room tiers, or select your role from the top navigation.
2. Student Login: Click on "Student Portal" or use the top navigation button to access room details, request leave passes, or file complaints.
3. Warden Access: Use "Warden Portal" to manage student entries, verify leave applications, and view block rosters.
4. Admin Access: Use "Admin Portal" to view financial summaries, block allotments, and occupancy statistics.
5. Dark Mode: Toggle the theme button in the navigation bar to switch between Light and Dark display modes.

---

## Configuration

- Port Configuration: Set the `PORT` environment variable in your `.env` file or export it before running `node server.js`. Default is `3000`.
- Data Persistence: By default, client state is managed via `localStorage`. For production database integration, connect backend endpoints in `server.js`.

---

## License

This project is licensed under the MIT License - feel free to use and adapt it for academic and institutional purposes.
