import React from "react";
import style from "./PYQSubject.module.css";
import { Link } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import Backbar from "../../Components/BackBar/Backbar";
function PYQSubject() {
  return (
    <>
      <Backbar></Backbar>
      <div className={style.Mainpage}>
        <Link to={`/NPYQ/PYQSubject`} className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Honours(Paper-1)
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Honours(Paper-1)
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Hindi
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          English
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Mathematics
        </Link>
      </div>
    </>
  );
}

export default PYQSubject;
