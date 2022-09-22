const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  expenses: [{ type: mongoose.Types.ObjectId, ref: "Expense" }],
  incomes: [{ type: mongoose.Types.ObjectId, ref: "Income" }],
});

module.exports = mongoose.model("User", userSchema);
