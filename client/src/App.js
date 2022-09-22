import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainPage from "./pages/MainPage/MainPage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import AddExpensePage from "./pages/AddExpensePage/AddExpensePage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import AddDebtPage from "./pages/AddDebtPage/AddIncomePage";
import IncomesPage from "./pages/IncomesPage/IncomesPage";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <MainPage /> : <HomePage />}
        ></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/addExpense"
          element={!isLoggedIn ? <HomePage /> : <AddExpensePage />}
        ></Route>
        <Route
          path="/expenses"
          element={!isLoggedIn ? <HomePage /> : <ExpensesPage />}
        ></Route>
        <Route
          path="/addIncome"
          element={!isLoggedIn ? <HomePage /> : <AddDebtPage />}
        ></Route>
        <Route
          path="/incomes"
          element={!isLoggedIn ? <HomePage /> : <IncomesPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
