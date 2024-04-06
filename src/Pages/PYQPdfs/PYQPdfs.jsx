import React from "react";
import style from "./PYQPdfs.module.css";
import { Link } from "react-router-dom";
import { MdPictureAsPdf } from "react-icons/md";
import Backbar from "../../Components/BackBar/Backbar";

function PYQPdfs() {
  return (
    <>
      <Backbar></Backbar>
      <div className={style.Mainpage}>
        <Link className={style.Parts}>
          <span>
            <MdPictureAsPdf color="#e4312c" size={25} />
          </span>
          2017
        </Link>
        <Link className={style.Parts}>
          <span>
            <MdPictureAsPdf color="#e4312c" size={25} />
          </span>
          2018
        </Link>
        <Link className={style.Parts}>
          <span>
            <MdPictureAsPdf color="#e4312c" size={25} />
          </span>
          2019
        </Link>
      </div>
    </>
  );
}

export default PYQPdfs;
