import React, { useEffect, useContext } from "react";
import style from "./Cmodal.module.css";
import Clogo from "../../assets/Clogo.png";
import Qlogo from "../../assets/Qlogo.png";
import { Link } from "react-router-dom";
import { NotesArray } from "../../Context/NotesList-Store";

const Cmodal = ({ closeCmodal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });
  const { codeLoading, setCodeLoading } = useContext(NotesArray);
  return (
    <>
      <div className={style.blurbg} onClick={closeCmodal}></div>
      <div className={style.Modal}>
        <h5>Choose your language</h5>
        <div className={style.chooseBox}>
          <Link
            className={style.lang}
            to="/Qbasic"
            onClick={() => setCodeLoading("Loading")}
          >
            <div className={style.logopart}>
              <img height="50px" src={Qlogo} alt="Qlogo" />
            </div>
            <p>Qbasic</p>
          </Link>
          {/* <Link
            to="/Qbasic"
            className={styles.box}
            onClick={() => setCodeLoading("Loading")}
          >
            <div className={styles.imgpart}>
              <img height="40px" src={LinkImage} alt="LinkImage" />
            </div>
            <div className={styles.contentpart}>
              <p>Code Ques</p>
            </div>
          </Link> */}
          <Link to="/CQuestions" className={style.lang}>
            <div className={style.logopart}>
              <img height="50px" src={Clogo} alt="Clogo" />
            </div>
            <p>C</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cmodal;
