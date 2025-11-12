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

```bash
# 🧩 1. Clone the Repository
git clone https://github.com/<your-username>/mobile-catalog.git
cd mobile-catalog

# 🗄️ 2. Backend Setup
cd server
npm install

# Create .env file inside server/ directory
# Add the following:
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourDB
PORT=5000

# (Optional) Seed sample data
npm run seed

# Run the backend server
# For development:
npm run dev

# For production:
npm start

# Backend runs on ➡️ http://localhost:5000

# 💻 3. Frontend Setup
cd ..
cd client

# Create React + Tailwind project (if not created)
npm create vite@latest client -- --template react
cd client
npm install
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure Tailwind
# Edit tailwind.config.js and add:
# content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"]

# Add this to src/index.css:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# Run the frontend
npm run dev

# Frontend runs locally on ➡️ http://localhost:5173

# 🚀 Deployed Frontend
# Live demo available at:
# 👉 https://1fi-aasign.vercel.app/



# this is schema that used
   {
  model: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  mrp: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  // ✅ EMI array field
  emiPlans: [
    {
      months: {
        type: Number,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      interest: {
        type: Number, // can be percentage
        required: true
      }
    }
  ]
}