const express = require("express");
const router = express.Router();
const { getMobiles } = require("../controllers/mobileController");

router.get("/mobiles", getMobiles); // <-- IMPORTANT

module.exports = router;
