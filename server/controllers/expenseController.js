const Expense = require("../models/expenseModel");
const User = require("../models/userModel");

exports.addExpense = async (req, res, next) => {
  try {
    const { title, amount, date } = req.body;

    if (!title || !amount || !date) {
      return res.status(404).json({ message: "Please fill all inputs." });
    }

    const expense = await new Expense({
      title,
      amount,
      date,
    });

    await expense.save();

    const user = await User.findByIdAndUpdate(req.user.userId, {
      $push: { expenses: expense._id },
    });

    return res.json({ expenses: user.expenses });
  } catch (error) {}
};

exports.getExpenses = async (req, res, next) => {
  const user = await User.findById(req.user.userId).populate("expenses");

  const expenses = user.expenses.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  res.status(200).json({ expenses });
};

exports.deleteExpense = async (req, res, next) => {
  const { expenseId } = req.body;
  try {
    await User.findByIdAndUpdate(req.user.userId, {
      $pull: { expenses: expenseId },
    });
    await Expense.deleteOne({ _id: expenseId });

    const user = await User.findById(req.user.userId).populate("expenses");
    const expenses = user.expenses.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return res.status(200).json({ expenses });
  } catch (error) {
    res.status(500).json("server failed");
  }
};
