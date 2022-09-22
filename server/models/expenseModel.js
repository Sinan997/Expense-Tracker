const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: { type: String },
  amount: { type: Number },
  date: { type: Date },
});

module.exports = mongoose.model("Expense", expenseSchema);
