import classes from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  let month;
  let day;
  let year;
  if (props.date) {
    month = new Date(props.date).toLocaleString("en-US", { month: "long" });
    day = new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
    year = new Date(props.date).getFullYear();
  }

  return (
    <div className={classes.expenseDate}>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
