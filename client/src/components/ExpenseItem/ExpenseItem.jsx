import classes from "./ExpenseItem.module.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import { MdDelete } from "react-icons/md";
import { deleteExpenseRoute, deleteIncomeRoute } from "../../utils/APIRoutes";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useLocation } from "react-router-dom";

function ExpenseItem(props) {
  const { pathname } = useLocation();
  const { token } = useContext(AuthContext);
  const deleteHandler = async () => {
    if (pathname === "/expenses") {
      const res = await axios.post(
        deleteExpenseRoute,
        { expenseId: props.id },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      props.items(res.data.expenses);
    } else {
      const res = await axios.post(
        deleteIncomeRoute,
        { incomeId: props.id },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      props.items(res.data.incomes);
    }
  };
  return (
    <li>
      <div className={classes.expenseItem}>
        <div className={classes.expenseItemDescription}>
          <ExpenseDate date={props.date} />
          <h2>{props.title}</h2>
          <div className={classes.expenseItemPrice}>${props.amount}</div>
          <MdDelete onClick={deleteHandler} className={classes.deleteIcon} />
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;
