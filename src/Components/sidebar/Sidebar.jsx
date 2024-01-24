import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import SetSemester from "../SetSemester/SetSemester";


function Sidebar({ setClickSidebar, clickSidebar }) {
  const ActiveStyle = ({ isActive }) => {

    if (isActive) {
      return {
        color: "white",
        backgroundColor: "#6528e0",
        borderRadius: "30px",
      };
    }
  };

  return (
    <>
      <motion.div
        className={styles.navmenu}
        initial={{ x: 100 }}
        animate={{ x: 10 }}
      >
        <ul>
          <li>
            <NavLink
              style={ActiveStyle}
              to="/"
              onClick={() => setClickSidebar(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              style={ActiveStyle}
              to="/About"
              onClick={() => setClickSidebar(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={ActiveStyle}
              to="/ContactUS"
              onClick={() => setClickSidebar(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <h6 style={{ marginLeft: "45px", marginTop: "25px" }}>
          Choose your year:
        </h6>
        <SetSemester />
      </motion.div>
    </>
  );
}
export default Sidebar;
