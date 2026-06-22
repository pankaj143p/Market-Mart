<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="MarketMart Logo" width="80" />
  <h1>MarketMart - Full-Stack MERN E-Commerce App</h1>
  <p>A professionally engineered, full-stack E-commerce platform built strictly using modern standard React (CRA) on the frontend and Express/MongoDB on the backend.</p>
</div>

---

## 🛠 Tech Stack Details

- **Frontend:** Pure React.js (`react-scripts`), Redux Toolkit (for Cart state management), AuthContext API (for JWT user sessions).
- **Backend:** Node.js, Express.js architecture mapped with middleware-based routing.
- **Database:** MongoDB (via Mongoose schemas).
- **Features:** Unified Admin Dashboard, Direct Cloudinary Content Maps, Personal User Profiles matching mapped Order Histories.
- **Payments:** Razorpay fully implemented (utilize your test metrics or placeholder).
- **Cloud Storage:** Cloudinary integration for Product image uploading securely via Multer.

---

## 🚀 Quick Start / Local Development Guide

The workspace is configured beautifully using a monorepo-friendly setup with `concurrently`, enabling you to start everything from the very root folder.

### 1️⃣ Dependencies & Environments
Make sure you have MongoDB running locally, or map it to a remote database string.

Inside the `backend/` folder, ensure your `.env` looks like this:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/MarketMart
JWT_SECRET=super_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

From the **root folder** `MarketMart/`, trigger a full install across environments:
```bash
npm run build
```

### 2️⃣ Populate the Database (Seeding)
Test the platform rapidly featuring beautiful dummy products (Unsplash) and automatic `Admin` role provisioning:
```bash
npm run seed
```
> **Seed Admin Access:** Email: `admin@MarketMart.com` | Password: `password123`

### 3️⃣ Run Servers Start
Run this single command at the root to bind the Backend (Port 5000) and Frontend (Port 3000) natively:
```bash
npm run dev
```

---

## ☁️ 1-Click Deployment (Render Free-Tier Optimized)

The server codebase features a seamless fallback mechanic leveraging Node `process.env.NODE_ENV === "production"`. When deployed to Render as a singular instance, the Express backend hosts and correctly resolves static routes to `/frontend/build` rendering the whole platform completely free on 1 Node server.

1. Publish this repo onto **GitHub**.
2. Go to [Render Dashboard](https://dashboard.render.com).
3. Connect Repo -> Create a **Web Service**.
4. Configure Build Command:
   `npm run render-build` 
   *(This cleanly installs API + UI node_modules then generates `react-scripts build`)*
5. Configure Start Command:
   `npm start`
6. Open **Advanced > Environment Variables** and map your `.env` fields heavily defining `NODE_ENV = production`.
7. Hit **Deploy**. The robust path resolving inside `/backend/server.js` hosts it fluidly!

---

## 📄 Postman Documentations
This repository includes a fully-scaffolded API testing toolkit: **`MarketMart_Postman_Collection.json`**. 
Simply Import this file directly into the local Postman IDE. It features variables like `{{token}}` properly mapped to effortlessly check protected admin/user/order payloads. Happy coding!
