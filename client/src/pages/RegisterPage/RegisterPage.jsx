import Header from "../../components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import classes from "./RegisterPage.module.css";
import { registerRoute } from "../../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        await axios.post(registerRoute, {
          username,
          email,
          password,
        });
        navigate("/login");
      } catch (error) {
        toast.error(error.response.data.message, toastOptions);
      }
    }
  };

  const handleValidation = () => {
    if (username.length < 3) {
      toast.error("Username can't be lower than 3 characters.", toastOptions);
      return false;
    }
    if (email.length < 10 || !email.includes("@")) {
      toast.error("Please enter email correctly", toastOptions);
      return false;
    }
    if (password.length < 7) {
      toast.error("Password must be higher than 6 character", toastOptions);
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
  return (
    <>
      <Header />
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            value={username}
            placeholder="Username"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            placeholder="Email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default RegisterPage;
