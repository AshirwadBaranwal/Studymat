import React from "react";
import { Notelist } from "../../Arrays/NotesArray";
import style from "./Notes.module.css";
import { Link } from "react-router-dom";
function Notes() {
  return Notelist.map((N) => {
    return (
      <Link to={N.URL} target="blank" key={N.Ch_Name} className={style.Bar}>
        <div className={style.heading}>
          <p>{N.Ch_Name}</p>
          <p>Subject - {N.Subj}</p>
        </div>
      </Link>
    );
  });
}

export default Notes;
