import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Logo.png";

function Navbar() {
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
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDisabled"
            style={{ backgroundColor: "rgb(113, 45, 247)", fontSize: "18px" }}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
            Dark Mode
          </label>
        </div>
        <div className="chooseClass"></div>
      </div>
    </header>
  );
}

export default Navbar;
