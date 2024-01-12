import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.png";
import { NotesArray } from "../../Context/NotesList-Store";

function Navbar() {
  const [showdropdown, setshowdropdown] = useState(false);
  const { setSemester, semester } = useContext(NotesArray);
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
          {semester}
        </button>
        <div
          className={styles.dropdown}
          style={{ display: !showdropdown ? "None" : "flex" }}
        >
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Sem-1");
            }}
          >
            Sem-1
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Sem-2");
            }}
          >
            Sem-2
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Sem-3");
            }}
          >
            Sem-3
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Sem-4");
            }}
          >
            Sem-4
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Sem-5");
            }}
          >
            Sem-5
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Sem-6");
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
