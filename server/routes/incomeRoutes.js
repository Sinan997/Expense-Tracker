const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");
const isAuth = require("../middleware/is-auth");

router.post("/addIncome", isAuth, incomeController.addIncome);

router.get("/getIncomes", isAuth, incomeController.getIncomes);

router.post("/deleteIncome", isAuth, incomeController.deleteIncome);

module.exports = router;
