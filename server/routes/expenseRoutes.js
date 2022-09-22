const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const isAuth = require("../middleware/is-auth");

router.post("/addExpense", isAuth, expenseController.addExpense);

router.get("/getExpenses", isAuth, expenseController.getExpenses);

router.post("/deleteExpense", isAuth, expenseController.deleteExpense);

module.exports = router;
