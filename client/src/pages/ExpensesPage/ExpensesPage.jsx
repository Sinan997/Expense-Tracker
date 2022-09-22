import SideBar from "../../components/SideBar/SideBar";
import classes from "./ExpensesPage.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import ExpensesFilter from "../../components/ExpensesFilter/ExpensesFilter";
import { useState, useEffect } from "react";
import { getExpensesRoute } from "../../utils/APIRoutes";
import axios from "axios";

function ExpensesPage() {
  const [filteredMonth, setFilteredMonth] = useState("all");
  const [user, setUser] = useState();
  const [items, setItems] = useState([{ _id: "" }]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  const newItems = (items) => {
    setItems(items);
  };

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  useEffect(() => {
    const getExpenses = async () => {
      try {
        if (user) {
          const res = await axios.get(getExpensesRoute, {
            headers: { authorization: "Bearer " + user.token },
          });

          switch (filteredMonth) {
            case "all":
              setItems(res.data.expenses);
              break;
            case "january":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 0
                )
              );
              break;
            case "february":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 1
                )
              );
              break;
            case "march":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 2
                )
              );
              break;
            case "april":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 3
                )
              );
              break;
            case "may":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 4
                )
              );
              break;
            case "june":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 5
                )
              );
              break;
            case "july":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 6
                )
              );
              break;
            case "august":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 7
                )
              );
              break;
            case "september":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 8
                )
              );
              break;
            case "october":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 9
                )
              );
              break;
            case "november":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 10
                )
              );
              break;
            case "december":
              setItems(
                res.data.expenses.filter(
                  (expense) => new Date(expense.date).getMonth() === 11
                )
              );
              break;
            default:
              console.log("first");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getExpenses();
  }, [user, filteredMonth]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <SideBar />
        <div className={classes.content}>
          <ContentHeader />
          <div className={classes.contentPart}>
            <div className={classes.expenses}>
              <ExpensesFilter
                selected={filteredMonth}
                onChangeFilter={filterChangeHandler}
              />
              <ExpensesList getItems={newItems} items={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensesPage;
