import { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./LoginPage.module.css";
import axios from "axios";
import { loginRoute } from "../../utils/APIRoutes";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const toastOptions = {
    position: "bottom-right",
    autoClose: "600",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const { data } = await axios.post(loginRoute, { email, password });
        authCtx.login(data.token, data.expirationTime);
        navigate("/");
      } catch (error) {
        toast.error(error.response.data.message, toastOptions);
      }
    }
  };

  const handleValidation = () => {
    if (email === "") {
      toast.error("Email is empty!", toastOptions);
      return false;
    }
    if (password === "") {
      toast.error("Password is empty!", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            type="text"
            placeholder="Email"
          />
          <label htmlFor="password">Şifre</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id="password"
            type="password"
            placeholder="Şifre"
          />
          <button>Giriş Yap</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default LoginPage;
