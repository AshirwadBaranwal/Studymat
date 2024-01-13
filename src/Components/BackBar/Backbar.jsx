import React from "react";
import style from "./Backbar.module.css";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Backbar() {
  const BackButton = useNavigate();
  return (
    <div className={style.Backbar}>
      <span
        style={{ color: "#7110b2", marginLeft: "15px" }}
        onClick={() => BackButton(-1)}
      >
        <IoArrowBackSharp size={32} />
        Back
      </span>
    </div>
  );
}

export default Backbar;
