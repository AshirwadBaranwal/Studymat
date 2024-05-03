import React from "react";

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
      ;
    </>
  );
}

export default ButtonLoader;
