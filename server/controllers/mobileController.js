// controllers/mobileController.js
const Mobile = require("../models/Mobile");

exports.getMobiles = async (req, res) => {
  try {
    const mobiles = await Mobile.find();  // fetch all records
    return res.status(200).json(mobiles); 
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch mobiles",
      error: error.message
    });
  }
};
