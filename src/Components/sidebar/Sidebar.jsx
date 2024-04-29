import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../Context/AuthContext";
// import SetSemester from "../SetSemester/SetSemester";

function Sidebar({ setClickSidebar, clickSidebar }) {
  const ActiveStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "white",
        backgroundColor: "var(--btn-clr)",
        borderRadius: "30px",
      };
    }
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, []);
  const { isLoggedin } = useAuth();
  return (
    <>
      <div
        className={styles.wholepage}
        onClick={() => setClickSidebar(false)}
      ></div>
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
          {isLoggedin ? (
            <li>
              <NavLink
                style={ActiveStyle}
                className={styles.NavLink}
                to="/logout"
                onClick={() => setClickSidebar(false)}
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  style={ActiveStyle}
                  className={styles.NavLink}
                  to="/Login"
                  onClick={() => setClickSidebar(false)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={ActiveStyle}
                  className={styles.NavLink}
                  to="/register"
                  onClick={() => setClickSidebar(false)}
                >
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
        {/* <h6 style={{ marginLeft: "45px", marginTop: "25px" }}>
          Choose your year:
        </h6> */}
        {/* <SetSemester /> */}
      </motion.div>
    </>
  );
}
export default Sidebar;
