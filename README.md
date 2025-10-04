# Inventory Management System

The Inventory Management System is a web app that lets users securely log in and manage their products. It features a dashboard with quick stats like total items, low stock, and recently added items. Users can add, edit, delete, search, and filter products through a clean, responsive UI. Data is stored using localStorage or backend APIs with secure authentication.

Built with a **React** frontend, **Node.js/Express** backend, **MongoDB** database

---

## Demo Link

[Live Demo](https://pendora-frontend.vercel.app/)

---

## Quick Start

```
git clone https://github.com/alok-kumar21/Inventroy-Management-frontend.git
cd <your-repo>
npm install
npm run dev

```

## Technologies

- React JS
- React Router
- Node.js
- Express
- MongoDB
- Bootstrap
- Context API

## Demo Video

[Video Link](https://youtu.be/FzJ-0-eVBI0)

## Features

**Authentication**

- Secure Login / Signup with session handling.
- Session persists until user logs out.

**Dashboard**

- View total items, low stock items, and recently added items.
- Quick navigation to inventory management.

**Inventory Management**

- List all products in a table/grid view.
- Add new products with name, category, price, stock, and date.
- Edit existing products with updated details.
- Delete products permanently.
- Search and filter products by name, category, or stock status.

**Search**

- Instantly search for products by typing keywords in the search bar.
- Live filtering as you type—no need to refresh or click search.

## API Reference

### **Auth Routes**<br>

- POST /api/auth/signup → Register a new user
- POST /api/auth/login → Login and return JWT

**Inventory Routes**

- GET /api/inventory → List all products
- GET /api/inventory/:id → Get a single product
- POST /api/inventory → Add a new product (protected)
- PUT /api/inventory/:id → Update a product (protected)
- DELETE /api/inventory/:id → Delete a product (protected)
- GET /api/inventory/stats → Get dashboard stats (total, low stock, recent)

## Contact

For bugs or feature requests, please reach out to alok.8kumar21@gmail.com
