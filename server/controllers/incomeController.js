const Income = require("../models/incomeModel");
const User = require("../models/userModel");

exports.addIncome = async (req, res, next) => {
  try {
    const { title, amount, date } = req.body;

    if (!title || !amount || !date) {
      return res.status(404).json({ message: "Please fill all inputs." });
    }

    const income = await new Income({
      title,
      amount,
      date,
    });

    await income.save();

    const user = await User.findByIdAndUpdate(req.user.userId, {
      $push: { incomes: income._id },
    });

    return res.json({ incomes: user.incomes });
  } catch (error) {
    return res.json(error);
  }
};

exports.getIncomes = async (req, res, next) => {
  const user = await User.findById(req.user.userId).populate("incomes");

  const incomes = user.incomes.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  res.status(200).json({ incomes });
};

exports.deleteIncome = async (req, res, next) => {
  const { incomeId } = req.body;
  try {
    await User.findByIdAndUpdate(req.user.userId, {
      $pull: { incomes: incomeId },
    });
    await Income.deleteOne({ _id: incomeId });

    const user = await User.findById(req.user.userId).populate("incomes");
    const incomes = user.incomes.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return res.status(200).json({ incomes });
  } catch (error) {
    res.status(500).json("server failed");
  }
};
