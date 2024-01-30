import React from "react";
import styles from "./Contact.module.css";
import Backbar from "../../Components/BackBar/Backbar.jsx";

function Contact() {
  // function submitbtn(e) {
  //   console.log("hello");
  //   e.preventDefault();
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbz_xuN9Yn0bM1yyqLUEhbBA1eI1vTFbnpCruQmKFvKoXDEkEwT3zLu04Y--FYOJp7_2/exec",
  //     { method: "POST", body: data }
  //   )
  //     .then((res) => res.text())
  //     .then((data) => console.log(data));
  // }
  return (
    <>
      <Backbar previosPage="/"></Backbar>
      <div className={styles.right}>
        <form
          action="https://script.google.com/macros/s/AKfycbz_xuN9Yn0bM1yyqLUEhbBA1eI1vTFbnpCruQmKFvKoXDEkEwT3zLu04Y--FYOJp7_2/exec"
          method="POST"
        >
          <div className={styles.inputCon}>
            <div style={{ minWidth: "40%" }}>
              <label htmlFor="Fname">First Name</label>
              <br />
              <input type="text" id="Fname" name="FirstName" />
            </div>
            <div style={{ minWidth: "40%" }}>
              <label htmlFor="Lname">Last Name</label>
              <br />
              <input type="text" id="Lname" name="LastName" />
            </div>

            <div style={{ minWidth: "40%" }}>
              <label htmlFor="EA">Email Address</label>
              <br />
              <input type="email" id="EA" name="Email" />
            </div>
            <div style={{ minWidth: "40%" }}>
              <label htmlFor="Subject">Subject</label>
              <br />
              <input type="text" id="Subject" name="Subject" />
            </div>
            <textarea
              className={styles.textarea}
              name="Message"
              id="desc"
              cols="30"
              rows="5"
              placeholder="Type your meaasge....."
            ></textarea>
            <button className={styles.btn}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
