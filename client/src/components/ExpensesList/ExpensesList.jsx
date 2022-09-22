import ExpenseItem from "../ExpenseItem/ExpenseItem";
import classes from "./ExpensesList.module.css";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className={classes.expensesListFallback}>No expense found</h2>;
  }
  const itemsTransporter = (items) => {
    props.getItems(items);
  };
  return (
    <ul className={classes.expensesList}>
      {props.items.map((expense, index) => {
        return (
          <ExpenseItem
            items={itemsTransporter}
            key={expense._id}
            id={expense._id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
