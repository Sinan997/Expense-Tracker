import SideBar from "../../components/SideBar/SideBar";
import classes from "./IncomesPage.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ExpensesFilter from "../../components/ExpensesFilter/ExpensesFilter";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import { useEffect, useState } from "react";
import axios from "axios";
import { getIncomeRoute } from "../../utils/APIRoutes";

function IncomesPage() {
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

  const filterChangeHandler = (selectedYear) => {
    setFilteredMonth(selectedYear);
  };

  useEffect(() => {
    const getExpenses = async () => {
      try {
        if (user) {
          const res = await axios.get(getIncomeRoute, {
            headers: { authorization: "Bearer " + user.token },
          });

          switch (filteredMonth) {
            case "all":
              setItems(res.data.incomes);
              break;
            case "january":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 0
                )
              );
              break;
            case "february":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 1
                )
              );
              break;
            case "march":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 2
                )
              );
              break;
            case "april":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 3
                )
              );
              break;
            case "may":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 4
                )
              );
              break;
            case "june":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 5
                )
              );
              break;
            case "july":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 6
                )
              );
              break;
            case "august":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 7
                )
              );
              break;
            case "september":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 8
                )
              );
              break;
            case "october":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 9
                )
              );
              break;
            case "november":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 10
                )
              );
              break;
            case "december":
              setItems(
                res.data.incomes.filter(
                  (income) => new Date(income.date).getMonth() === 11
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

export default IncomesPage;
