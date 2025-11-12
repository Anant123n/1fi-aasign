const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Mobile", mobileSchema);
