import React, { useContext, useEffect } from "react";
import styles from "./DarkToggle.module.css";
import { NotesArray } from "../../Context/NotesList-Store";

function DarkToggle() {
  const { theme, setTheme } = useContext(NotesArray);

  const Togglebtn = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else if (theme === "Dark") {
      setTheme("Light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={styles.Togglebtn} onClick={() => Togglebtn()}>
      {theme}
    </div>
  );
}

export default DarkToggle;
