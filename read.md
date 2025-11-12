# 📱 Mobile Catalog — MERN Project

A full-stack **MERN (MongoDB, Express, React, Node.js)** project that displays a catalog of mobile phones.  
The backend exposes REST APIs, while the frontend (React) consumes them dynamically with Tailwind CSS styling.

---

## 🧰 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React (Vite) + Tailwind CSS |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB (Atlas) |
| **ODM** | Mongoose |
| **Dev Tools** | Nodemon, dotenv, CORS |
| **Language** | JavaScript (ES6+) |

---

## ⚙️ Project Setup Instructions

### 🧩 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/mobile-catalog.git
cd mobile-catalog


🗄️ 2. Backend Setup

Go to backend folder

cd server


Install dependencies

npm install


Create .env file inside server/ directory:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourDB
PORT=5000


Seed sample data (optional)

npm run seed


Run the server

For development:

npm run dev


For production:

npm start