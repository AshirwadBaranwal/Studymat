import React, { useContext } from "react";
import Backbar from "../../Components/BackBar/Backbar";
import { Link, useParams } from "react-router-dom";
import { NotesArray } from "../../Context/NotesList-Store";
import style from "./ShowNotes.module.css";

function ShowNotes() {
  const { Subject } = useParams();
  const { notesArray } = useContext(NotesArray);
  const noteLinkArray = notesArray.filter((p) => {
    return p.Subj === Subject;
  });
  const ttt = noteLinkArray[0].Chapters;
  return (
    <div>
      <Backbar previosPage="/Subject"></Backbar>
      <div></div>
      <div className={style.main}>
        {ttt.map((L) => {
          return (
            <Link to={L.URL} key={L.id} target="blank" className={style.Bar}>
              <div className={style.heading}>
                <p>{L.Ch_Name}</p>
                <p>Notes</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ShowNotes;
