import React from "react";
import style from "./Syllabus.module.css";
import SyllabusArray from "../../Arrays/SyllabusArray";

function Syllabus() {
  return (
    <section className={style.mainpage}>
      <h6 className={style.heading}>Syllabus</h6>
      <p className={style.guidline}>
        As per guidelines of the UGC/Patliputra University (Hons.) Paper
      </p>
      <h6 className={style.heading}>Hons. — First Year</h6>
      {/* <h6 className={style.heading}>Group- 1</h6> */}

      {/* ********COMPUTER FUNDAMENTALS*********      */}
      {/* ********COMPUTER FUNDAMENTALS*********      */}
      {SyllabusArray.map(
        ({ Subheading, Paper, Group, Subject, ChapterName, Topics }) => {
          return (
            <>
              {Paper ? (
                <h6 className={style.heading}>PAPER - {Paper}</h6>
              ) : null}
              {Group ? (
                <h6 className={style.heading}>Group - {Group}</h6>
              ) : null}
              <h5 className={style.heading}>{Subject}</h5>
              <h5 className={style.heading}>{Subheading}</h5>
              <div>
                <ul>
                  <li>
                    <div className={style.div}>
                      <span className={style.chapterName}>{ChapterName}</span>
                      {Topics}
                    </div>
                  </li>
                </ul>
              </div>
            </>
          );
        }
      )}
    </section>
  );
}

export default Syllabus;
