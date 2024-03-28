import React, { useState } from "react";
import copy from "copy-to-clipboard";
import style from "./Copybtn.module.css";

const Copybtn = ({ copythis }) => {
  const [copybtnmark, setcopybtnmark] = useState("Copy");
  return (
    <div>
      <div
        className={style.copybtn}
        onClick={() => {
          copy(copythis);
          setcopybtnmark("Copied");
          setTimeout(() => {
            setcopybtnmark("Copy");
          }, 1000);
        }}
      >
        {copybtnmark}
      </div>
    </div>
  );
};

export default Copybtn;
