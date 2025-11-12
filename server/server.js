const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const mobileRoutes = require("./routes/mobileRoutes");
app.use("/api", mobileRoutes); // <-- IMPORTANT

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
