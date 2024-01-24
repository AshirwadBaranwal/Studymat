import React, { useContext } from "react";
import { NotesArray } from "../../Context/NotesList-Store";
import styles from "./SetSemester.module.css";

function SetSemester() {
  const { setSemester, semester } = useContext(NotesArray);
  return (
    <div>
      <div className={styles.dropdown}>
        <div
          className={styles.options}
          onClick={() => {
            setSemester("Year-1");
          }}
          style={{
            backgroundColor: semester === "Year-1" ? "#6528e0" : null,
            color: semester === "Year-1" ? "white" : null,
          }}
        >
          Year-1
        </div>
        <div
          className={styles.options}
          onClick={() => {
            setSemester("Year-2");
          }}
          style={{
            backgroundColor: semester === "Year-2" ? "#6528e0" : null,
            color: semester === "Year-2" ? "white" : null,
          }}
        >
          Year-2
        </div>
        <div
          className={styles.options}
          onClick={() => {
            setSemester("Year-3");
          }}
          style={{
            backgroundColor: semester === "Year-3" ? "#6528e0" : null,
            color: semester === "Year-3" ? "white" : null,
          }}
        >
          Year-3
        </div>
      </div>
    </div>
  );
}

export default SetSemester;
