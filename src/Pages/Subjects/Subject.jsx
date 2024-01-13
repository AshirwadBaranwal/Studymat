import React, { useContext } from "react";
import SubBanner from "../../assets/SubBanner.png";
import styles from "./Subject.module.css";
import { NotesArray } from "../../Context/NotesList-Store";
import Backbar from "../../Components/BackBar/Backbar";

function Subject() {
  const { notesArray } = useContext(NotesArray);

  return (
    <>
      <Backbar></Backbar>
      <div className={styles.banner}>
        <img width="100%" height="80px" src={SubBanner} alt="Banner" />
        <h2>Subject</h2>
      </div>
      <div className={styles.main}>
        {notesArray.map((items) => {
          return (
            <div className={styles.subjectBox} key={items.Subj}>
              <div className={styles.Image}>
                <img height="40px" src={items.Logo} alt="" />
              </div>
              <div className={styles.content}>
                <div>{items.Subj}</div>
                <p>Chapters - {items.Chapters.length} </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Subject;
