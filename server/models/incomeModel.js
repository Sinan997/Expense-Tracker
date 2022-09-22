const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  title: { type: String },
  amount: { type: Number },
  date: { type: Date },
});

module.exports = mongoose.model("Income", incomeSchema);
