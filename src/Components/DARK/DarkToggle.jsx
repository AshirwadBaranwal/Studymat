import React, { useContext, useEffect, useState } from "react";
import styles from "./DarkToggle.module.css";
import { NotesArray } from "../../Context/NotesList-Store";
import { WiDaySunny } from "react-icons/wi";
import { IoIosMoon } from "react-icons/io";

function DarkToggle() {
  const { setDarkMode, darkMode } = useContext(NotesArray);

  const ActiveMode = async () => {
    setDarkMode(!darkMode);
    if (darkMode === true) {
      document.body.classList.add("Light");
      document.body.classList.remove("Dark");
      localStorage.setItem("Theme", "Light");
    }
    if (darkMode === false) {
      document.body.classList.add("Dark");
      document.body.classList.remove("Light");
      localStorage.setItem("Theme", "Dark");
    }
  };
  //  const darkagain = useEffect(() => {
  //   if (localStorage.getItem("Theme") === "Light") {
  //     document.body.classList.add("Light");
  //     document.body.classList.remove("Dark");
  //   } else if (localStorage.getItem("Theme") === "Dark") {
  //     document.body.classList.add("Dark");
  //     document.body.classList.remove("light");
  //     setDarkMode(!darkMode);
  //   }
  // }, []);

  return (
    <div className={styles.Togglebtn} onClick={() => ActiveMode()}>
      {darkMode ? <IoIosMoon size={25} /> : <WiDaySunny size={25} />}
    </div>
  );
}

export default DarkToggle;
