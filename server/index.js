const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const incomeRoutes = require("./routes/incomeRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/income", incomeRoutes);

mongoose.connect("mongodb://0.0.0.0:27017/expenseTracker").then(() => {
  app.listen(8000, () => {
    console.log("server is running at port:8000");
  });
});
