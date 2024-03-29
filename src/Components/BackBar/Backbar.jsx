import React from "react";
import style from "./Backbar.module.css";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Backbar({ previosPage }) {
  const BackButton = useNavigate();
  return (
    <div className={style.Backbar}>
      <span

        onClick={() => BackButton(previosPage)}
      >
        <IoArrowBackSharp size={32} />
        Back
      </span>
    </div>
  );
}

export default Backbar;
