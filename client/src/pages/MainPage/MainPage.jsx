import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import classes from "./MainPage.module.css";
import SideBar from "../../components/SideBar/SideBar";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import { useState, useEffect, useContext } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { getExpensesRoute, getIncomeRoute } from "../../utils/APIRoutes";
import AuthContext from "../../store/auth-context";
import ExpenseFilter from "../../components/ExpensesFilter/ExpensesFilter";
import pieChart from "../../assets/pie-chart.png";
ChartJS.register(ArcElement, Tooltip, Legend);

const calculateTotal = (array) => {
  let total = 0;
  array.forEach((element) => {
    total += element.amount;
  });
  return total;
};

function MainPage() {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [filteredMonth, setFilteredMonth] = useState("all");

  let incomeTotal = 0;
  let expenseTotal = 0;

  expenseTotal = calculateTotal(expenses);
  incomeTotal = calculateTotal(incomes);

  const { token } = useContext(AuthContext);

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const res = await axios.get(getExpensesRoute, {
          headers: { authorization: "Bearer " + token },
        });

        switch (filteredMonth) {
          case "all":
            setExpenses(res.data.expenses);
            break;
          case "january":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 0
              )
            );
            break;
          case "february":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 1
              )
            );
            break;
          case "march":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 2
              )
            );
            break;
          case "april":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 3
              )
            );
            break;
          case "may":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 4
              )
            );
            break;
          case "june":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 5
              )
            );
            break;
          case "july":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 6
              )
            );
            break;
          case "august":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 7
              )
            );
            break;
          case "september":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 8
              )
            );
            break;
          case "october":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 9
              )
            );
            break;
          case "november":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 10
              )
            );
            break;
          case "december":
            setExpenses(
              res.data.expenses.filter(
                (expense) => new Date(expense.date).getMonth() === 11
              )
            );
            break;
          default:
            console.log("first");
        }
      } catch (error) {}
    };
    getExpenses();

    const getIncomes = async () => {
      try {
        const res = await axios.get(getIncomeRoute, {
          headers: { authorization: "Bearer " + token },
        });
        switch (filteredMonth) {
          case "all":
            setIncomes(res.data.incomes);
            break;
          case "january":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 0
              )
            );
            break;
          case "february":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 1
              )
            );
            break;
          case "march":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 2
              )
            );
            break;
          case "april":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 3
              )
            );
            break;
          case "may":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 4
              )
            );
            break;
          case "june":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 5
              )
            );
            break;
          case "july":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 6
              )
            );
            break;
          case "august":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 7
              )
            );
            break;
          case "september":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 8
              )
            );
            break;
          case "october":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 9
              )
            );
            break;
          case "november":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 10
              )
            );
            break;
          case "december":
            setIncomes(
              res.data.incomes.filter(
                (expense) => new Date(expense.date).getMonth() === 11
              )
            );
            break;
          default:
            console.log("first");
        }
      } catch (error) {}
    };
    getIncomes();
  }, [token, filteredMonth]);

  const data = {
    labels: ["Incomes", "Expenses"],
    datasets: [
      {
        label: "# of Votes",
        data: [incomeTotal, expenseTotal],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <SideBar />
        <div className={classes.content}>
          <ContentHeader />
          <div className={classes.contentPart}>
            <div className={classes.results}>
              <div className={classes.chartContainer}>
                <div className={classes.chart}>
                  {expenses.length === 0 ? (
                    <img alt="" src={pieChart} />
                  ) : (
                    <Pie data={data} />
                  )}
                </div>
                <div className={classes.totals}>
                  <div>
                    <ExpenseFilter
                      selected={filteredMonth}
                      onChangeFilter={filterChangeHandler}
                    />
                  </div>
                  <div className={classes.totalsH}>
                    <h1>Expense Total: {expenseTotal}</h1>
                    <h1>Income Total: {incomeTotal}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
