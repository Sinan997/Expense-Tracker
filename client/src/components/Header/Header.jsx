import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function Header() {
  const authCtx = useContext(AuthContext);
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarStart}>
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
      </div>
      <h1>Expense Tracker</h1>
      <div className={classes.navbarEnd}>
        {!authCtx.isLoggedIn ? (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              authCtx.logout();
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
