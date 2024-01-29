import React, { useContext } from "react";
import EmptyImage from "../../assets/EmptyImage.svg";
import EmptyImage2 from "../../assets/EmptyImage(2).svg";
import styles from "./Emptysec.module.css";
import { NotesArray } from "../../Context/NotesList-Store";

function EmptySec() {
  const { darkMode } = useContext(NotesArray);
  return (
    <div className={styles.container}>
      <img src={!darkMode ? EmptyImage : EmptyImage2} alt="EmptyImage" />
      <p>No items here.</p>
    </div>
  );
}

export default EmptySec;
