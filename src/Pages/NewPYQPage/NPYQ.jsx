import React from "react";
import style from "./NPYQ.module.css";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import Backbar from "../../Components/BackBar/Backbar";
function NPYQ() {
  return (
    <>
      <Backbar previosPage={"/"} ></Backbar>
      <div className={style.Mainpage}>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Part-1
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Part-2
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Part-3
        </Link>
      </div>
    </>
  );
}

export default NPYQ;
