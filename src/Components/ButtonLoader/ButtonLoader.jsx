import React from "react";
import style from "./ButtonLoader.module.css";

function ButtonLoader() {
  return (
    <>
      <div className={`${style.spinner} ${style.center}`}>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
        <div className={style.spinner_blade}></div>
      </div>
    </>
  );
}

export default ButtonLoader;
