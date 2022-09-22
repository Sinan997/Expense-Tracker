import classes from "./ContentHeader.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { RiLogoutCircleLine } from "react-icons/ri";

function ContentHeader() {
  const authCtx = useContext(AuthContext);

  return (
    <div className={classes.contentHeader}>
      <div
        onClick={() => {
          authCtx.logout();
        }}
        className={classes.logoutIcon}
      >
        <RiLogoutCircleLine />
      </div>
    </div>
  );
}

export default ContentHeader;
