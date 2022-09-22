import classes from "./SideBar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbArrowsRightLeft } from "react-icons/tb";
import { useLocation } from "react-router-dom";

function SideBar() {
  const { pathname } = useLocation();
  return (
    <div className={classes.sideBar}>
      <div className={classes.logo}>
        <Link to="/">
          <img alt="" src={logo} />
        </Link>
        <div></div>
      </div>
      <div className={classes.sideBarLinks}>
        <ul className={classes.navbar}>
          <li className={pathname === "/addExpense" ? classes.active : ""}>
            <Link to="/addExpense">
              <IoIosAddCircleOutline />
              <span>Add Expense</span>
            </Link>
          </li>
          <li className={pathname === "/expenses" ? classes.active : ""}>
            <Link to="/expenses">
              {<TbArrowsRightLeft />}
              <span>Expenses</span>
            </Link>
          </li>
          <li className={pathname === "/addIncome" ? classes.active : ""}>
            <Link to="/addIncome">
              {<IoIosAddCircleOutline />}
              <span>Add Income</span>
            </Link>
          </li>
          <li className={pathname === "/incomes" ? classes.active : ""}>
            <Link to="/incomes">
              {<RiMoneyDollarCircleFill />}
              <span>Incomes</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
