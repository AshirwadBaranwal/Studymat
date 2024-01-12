import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.png";
import { NotesArray } from "../../Context/NotesList-Store";

function Navbar() {
  const [showdropdown, setshowdropdown] = useState(false);
  const { semester } = useContext(NotesArray);
  console.log(semester);
  return (
    <header>
      <div className={styles.logo}>
        <img height="60px" src={Logo} alt="Logo" />
      </div>

      <div className={styles.menu}>
        <ul className={styles.menulist}>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.navRest}>
        <button
          className={styles.dropbtn}
          onClick={() => {
            setshowdropdown(!showdropdown);
          }}
        >
          Semester?
        </button>
        <div
          className={styles.dropdown}
          style={{ display: !showdropdown ? "None" : "flex" }}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
        >
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
            }}
          >
            Sem-1
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
            }}
          >
            Sem-2
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
            }}
          >
            Sem-3
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
            }}
          >
            Sem-4
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
            }}
          >
            Sem-5
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
            }}
          >
            Sem-6
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
