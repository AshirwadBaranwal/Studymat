import React, { useEffect, useState } from "react";
import style from "./Verifyemail.module.css";
import { toast } from "react-hot-toast";

function Verifyemail() {
  const [emailtoken, setEmailToken] = useState({
    tokendata: "",
  });

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setEmailToken({ tokendata: urlToken });
  }, []);

  const verifysignupmail = async () => {
    try {
      const response = await fetch(
        `https://bcaguide.onrender.com/api/v1/verifyemail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailtoken),
        }
      );

      const res_data = await response.json();
      console.log("response data", res_data);
      const { message, token } = res_data;
      console.log(response);
      if (response.ok) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log("error in verifyemail frontend ", error);
    }
  };

  const verify = () => {
    verifysignupmail();
  };

  return (
    <div className={style.wholepage}>
      <h3>
        Verify your email on <span>bcaguide360.netlify.app</span>{" "}
      </h3>
      <p>{emailtoken ? `${emailtoken.tokendata}` : " no token"}</p>
      <button className={style.btn} onClick={verify}>
        click to verify
      </button>
    </div>
  );
}

export default Verifyemail;
