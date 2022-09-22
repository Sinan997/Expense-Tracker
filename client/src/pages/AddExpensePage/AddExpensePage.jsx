import SideBar from "../../components/SideBar/SideBar";
import classes from "./AddExpensePage.module.css";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { addExpenseRoute } from "../../utils/APIRoutes";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { date } from "../../utils/utils";

function AddExpensePage() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(date);

  const { token } = useContext(AuthContext);

  const handleValidation = () => {
    if (enteredTitle.length === 0) {
      toast.error("Expense title cant be empty!", toastOptions);
      return false;
    }
    if (enteredAmount < 0) {
      toast.error("Amount cant be lover than 0", toastOptions);
      return false;
    }
    return true;
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: "800",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        await axios.post(
          addExpenseRoute,
          {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate,
          },
          {
            headers: { authorization: "Bearer " + token },
          }
        );
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate(date);
        toast.success("The expense has been added successfully", toastOptions);
      } catch (error) {
        toast.error(error.response.data.message, toastOptions);
      }
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <SideBar />
          <div className={classes.content}>
            <ContentHeader />
            <div className={classes.contentPart}>
              <form onSubmit={submitHandler}>
                <div className={classes.newExpenseControls}>
                  <div className={classes.newExpenseControl}>
                    <label>Title</label>
                    <input
                      onChange={(e) => {
                        setEnteredTitle(e.target.value);
                      }}
                      type="text"
                      value={enteredTitle}
                    ></input>
                  </div>
                  <div className={classes.newExpenseControl}>
                    <label>Amount</label>
                    <input
                      type="number"
                      value={enteredAmount}
                      onChange={(e) => {
                        setEnteredAmount(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className={classes.newExpenseControl}>
                    <label>Date</label>
                    <input
                      type="date"
                      min="2019-01-01"
                      max="2022-12-31"
                      value={enteredDate}
                      onChange={(e) => {
                        setEnteredDate(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className={classes.newExpenseActions}>
                  <button type="submit">Add Expense</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddExpensePage;
