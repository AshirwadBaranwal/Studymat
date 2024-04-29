import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";

import { useAuth } from "../../Context/AuthContext.jsx";
import { toast } from "react-toastify";

function Contact() {
  const { userdata, isLoggedin } = useAuth();
  const [user, setUser] = useState(true);
  const [contact, setContact] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(userdata);
  if (userdata && user) {
    setContact({
      username: userdata.username,
      email: userdata.email,
      subject: "",
      message: "",
    });
    setUser(false);
  }
  // const { username, email, phone } = userdata;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://bcaguide.onrender.com/api/v1/contactUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );
      if (response.ok) {
        const res_data = await response.json();
        const { message } = res_data;
        toast.success(message);
        if (isLoggedin) {
          setContact({
            ...contact,
            subject: "",
            message: "",
          });
        } else {
          setContact({
            username: "",
            email: "",
            subject: "",
            message: "",
          });
        }
      } else {
        const res_data = await response.json();
        const { message, extradetails } = res_data;
        toast.error(extradetails);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.right}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputCon}>
              <div style={{ minWidth: "40%" }}>
                <label htmlFor="Lname">Username</label>
                <br />
                <input
                  type="text"
                  id="Lname"
                  name="username"
                  value={contact.username}
                  onChange={handleChange}
                />
              </div>

              <div style={{ minWidth: "40%" }}>
                <label htmlFor="EA">Email Address</label>
                <br />
                <input
                  type="email"
                  id="EA"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                />
              </div>
              <div style={{ minWidth: "40%" }}>
                <label htmlFor="Subject">Subject</label>

                <br />
                <input
                  type="text"
                  id="Subject"
                  name="subject"
                  value={contact.subject}
                  onChange={handleChange}
                />
              </div>
              <textarea
                className={styles.textarea}
                name="message"
                id="desc"
                cols="30"
                rows="5"
                placeholder="Type your meaasge....."
                value={contact.message}
                onChange={handleChange}
              ></textarea>
              <button className={styles.btn}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
