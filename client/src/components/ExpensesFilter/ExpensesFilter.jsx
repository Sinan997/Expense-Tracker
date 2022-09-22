import classes from "./ExpensesFilter.module.css";

function ExpensesFilter(props) {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilterControl}>
        <label>Filter by Month</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="all">All</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
