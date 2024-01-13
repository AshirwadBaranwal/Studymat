import React from "react";
import style from "./Notes.module.css";
import { Link } from "react-router-dom";
function Notes() {
  return (
    <Link to="#" target="blank" className={style.Bar}>
      <div className={style.heading}>
        <p>MS Word</p>
        <p>Practical</p>
      </div>
    </Link>
  );
}

export default Notes;
