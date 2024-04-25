import React, { useContext, useState } from "react";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  // const { setTokeninLS } = useContext(authContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

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
    console.log(user);

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

      toast.error(extradetails ? extradetails : message, {
        position: "bottom-right",
      });

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration successfull", {
          position: "bottom-right",
        });
        // setTokeninLS(res_data.token);
        navigate("/Login");
      }
      console.log(response);
    } catch (error) {
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
          <button type="submit">Sign up</button>
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
