import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.png";
import { NotesArray } from "../../Context/NotesList-Store";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import DarkToggle from "../DARK/DarkToggle";

function Navbar({ setClickSidebar, clickSidebar }) {
  const [showdropdown, setshowdropdown] = useState(false);
  const { setSemester, semester } = useContext(NotesArray);

  const ActiveStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "white",
        backgroundColor: "var(--btn-clr)",
        borderRadius: "30px",
      };
    }
  };

  return (
    <header>
      <div className={styles.logo}>
        <img height="60px" src={Logo} alt="Logo" />
      </div>

      <div className={styles.menu}>
        <ul className={styles.menulist}>
          <li>
            <NavLink style={ActiveStyle} className={styles.NavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={ActiveStyle} className={styles.NavLink} to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={ActiveStyle}
              className={styles.NavLink}
              to="/ContactUS"
            >
              Contact Us
            </NavLink>
          </li>
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
        <DarkToggle />

        {/* hamburger */}

        <span
          className={styles.hamburger}
          onClick={() => setClickSidebar(!clickSidebar)}
        >
          {!clickSidebar ? (
            <RxHamburgerMenu size={30} color="rgb(101, 40, 224)" />
          ) : (
            <RxCross1 size={30} color="rgb(101, 40, 224)" />
          )}
        </span>

        {/* hamburger */}

        {/* SemesterDropdown */}

        <div
          className={styles.dropdown}
          style={{ display: !showdropdown ? "None" : "flex" }}
        >
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Year-1");
            }}
          >
            Year-1
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Year-2");
            }}
          >
            Year-2
          </div>
          <div
            className={styles.options}
            onClick={() => {
              setshowdropdown(!showdropdown);
              setSemester("Year-3");
            }}
          >
            Year-3
          </div>
        </div>
        {/* SemesterDropdown */}
      </div>
    </header>
  );
}

export default Navbar;
