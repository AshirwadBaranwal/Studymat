import React, { useRef, useState } from "react";
import style from "./Register.module.css";

function Register() {
  const userNameRef = useRef();
  const PhoneRef = useRef();
  const EmailRef = useRef();
  const PasswordRef = useRef();

  const [registerUser, setRegisterUser] = useState({
    userName: "",
    password: "",
    email: "",
    phone: "",
  });
  const finalsubmit = async (e) => {
    e.preventDefault();
    setRegisterUser({
      userName: userNameRef.current.value,
      password: PasswordRef.current.value,
      email: EmailRef.current.value,
      phone: PhoneRef.current.value,
    });
    try {
      const response = await fetch("http://localhost:8000/api/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerUser),
      });
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <>
      <form onSubmit={(e) => finalsubmit(e)}>
        <div className={style.Main}>
          <div className={style.Left}>
            <img src="" alt="" />
          </div>
          <div className={style.Right}>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                ref={userNameRef}
              />
            </div>

            <br />
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                ref={EmailRef}
              />
            </div>

            <br />
            <div>
              <label htmlFor="phone">Phone: </label>
              <input
                type="text"
                placeholder="phone"
                name="phone"
                id="phone"
                ref={PhoneRef}
              />
            </div>

            <br />
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                ref={PasswordRef}
              />
            </div>
            <br />
            <button type="submit">Submit </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;