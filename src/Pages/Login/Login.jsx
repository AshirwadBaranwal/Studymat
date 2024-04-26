import React, { useState } from "react";
import style from "./Login.module.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function Login() {
  const { setTokeninLS } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      const res_data = await response.json();

      console.log(res_data);

      const { extradetails, message } = res_data;
      toast.error(extradetails ? extradetails : message, {
        position: "top-right",
      });

      if (response.ok) {
        toast.success("login sucessfull", {
          position: "top-right",
        });
        setTokeninLS(res_data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("frontend login error", error);
    }
  };

  {
    return (
      <div className={style.main}>
        <div className={style.form_box}>
          <form className={style.form} onSubmit={handleLogin}>
            <span className={style.title}>Sign in</span>
            <span className={style.subtitle}>Login to your account</span>
            <div className={style.form_container}>
              <input
                required
                className={style.input}
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />

              <input
                required
                className={style.input}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Sign in</button>
          </form>
          <div className={style.form_section}>
            <p>
              Don't have an account? <Link to="/register">sign up</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
