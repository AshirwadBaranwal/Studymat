import React from "react";
import CquesArray from "../../Arrays/CquesArray";
import style from "./CQuesBar.module.css";
import { motion } from "framer-motion";

function CQuesBar({ setCurrentPage, setShowQues, currentPage }) {
  return (
    <>
      <div className={style.whPage} onClick={() => setShowQues(false)}></div>
      <motion.div
        className={style.menu}
        initial={{ x: -20 }}
        animate={{ x: 10 }}
      >
        {CquesArray.map(({ id, Ques }) => {
          return (
            <>
              <div
                className={`${style.quesbox} ${
                  currentPage === id ? "activeCode" : null
                } `}
                onClick={() => {
                  setCurrentPage(id);
                  setShowQues(false);
                }}
                key={id}
              >
                <div className={style.ques}>{Ques}</div>
              </div>
            </>
          );
        })}
      </motion.div>
    </>
  );
}

export default CQuesBar;
