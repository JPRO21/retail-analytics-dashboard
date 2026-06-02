# 🌿 Botanica Retail Analytics Dashboard

Business analytics dashboard for plant retail operations built with React, Vite and Recharts.

This project simulates a real-world retail environment focused on plant stores, providing operational visibility into sales performance, inventory risk and category trends.

---

## Business Problem

Small retail businesses often manage inventory and sales using spreadsheets or disconnected tools, making it difficult to answer critical operational questions:

* Which products generate the most revenue?
* Which products are at risk of stockout?
* Which categories perform best?
* What inventory requires immediate attention?

This dashboard provides a centralized view of key retail metrics to support faster and better operational decisions.

---

## Features

### Executive Overview

* Revenue monitoring
* Units sold tracking
* Inventory valuation
* Low stock alerts

### Inventory Intelligence

* Critical stock monitoring
* Restock prioritization
* Product-level visibility

### Category Analytics

* Category performance comparison
* Revenue distribution analysis
* Operational segmentation

### Dynamic Filtering

* Category filters
* Date range filters
* Real-time dashboard updates

### Responsive Design

* Desktop and mobile friendly
* Optimized KPI layout
* Responsive charts and tables

---

## Technology Stack

| Layer      | Technology          |
| ---------- | ------------------- |
| Frontend   | React 18            |
| Build Tool | Vite                |
| Charts     | Recharts            |
| Styling    | CSS                 |
| Data       | Mock Retail Dataset |

---

## Project Structure

```text
src/
├── components/
│   ├── Charts/
│   ├── Filters/
│   ├── KPICard/
│   └── ProductTable/
├── data/
│   ├── cleanData.js
│   └── mockData.js
├── hooks/
│   └── useFilters.js
├── App.jsx
└── main.jsx
```

---

## Running Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

---

## Validation Status

✔ Development server validated

✔ Production build validated

✔ Dynamic filters validated

✔ Category analytics validated

✔ Inventory alerts validated

✔ Responsive layout validated

---

## Roadmap v2.0

### Data Layer

* Relational database integration
* Historical sales storage
* Inventory persistence

### API Layer

* REST API backend
* Frontend/backend separation
* External system integrations

### Operational Features

* CSV/Excel import
* Automated stock alerts
* Historical trend analysis
* Report exports (PDF / Excel)

### Security

* Authentication
* Role-based access control

### Advanced Analytics

* Inventory forecasting
* Demand prediction
* Automated business insights

---

## Author

Juan Pablo Rodríguez

GitHub: https://github.com/JPRO21

Built as part of a portfolio focused on analytics, operations and AI-assisted product development.
