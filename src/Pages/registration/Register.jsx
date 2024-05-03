import React, { useContext, useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";
import ButtonLoader from "../../Components/ButtonLoader/ButtonLoader";

function Register() {
  const { setTokeninLS } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [logging, setLogging] = useState(false);

  const navigate = useNavigate();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleregister = async (e) => {
    e.preventDefault();
    setLogging(true);
    try {
      const response = await fetch(
        `https://bcaguide.onrender.com/api/v1/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const res_data = await response.json();
      const { extradetails, message } = res_data;
      if (!response.ok) {
        setLogging(false);
        toast.error(extradetails ? extradetails : message, {
          position: "top-right",
        });
      }

      if (response.ok) {
        setLogging(false);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("verification link sent to your email", {
          position: "top-right",
        });
        // setTokeninLS(res_data.token);
      }
    } catch (error) {
      setLogging(false);
      console.log("front register error", error);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.form_box}>
        <form className={style.form} onSubmit={handleregister}>
          <span className={style.title}>Sign up</span>
          <span className={style.subtitle}>
            Create a free account with your email.
          </span>
          <div className={style.form_container}>
            <input
              type="text"
              className={style.input}
              placeholder="Full Name"
              name="username"
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
            />
            <input
              type="email"
              className={style.input}
              placeholder="Email"
              name="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="number"
              className={style.input}
              placeholder="phone"
              name="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
            />
            <input
              type="password"
              className={style.input}
              placeholder="Password"
              name="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <button className={style.submitButton} type="submit">
            {logging ? <ButtonLoader /> : "Sign up"}
          </button>
        </form>
        <div className={style.form_section}>
          <p>
            Have an account? <Link to="/Login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
