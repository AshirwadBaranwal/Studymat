import React, { useContext, useState } from "react";
import style from "./CLangQues.module.css";
// import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "bootstrap/dist/css/bootstrap.min.css";
import CquesArray from "../../Arrays/CquesArray";
import Backbar from "../../Components/BackBar/Backbar.jsx";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import CQuesBar from "../../Components/CQuesBar/CQuesBar.jsx";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { NotesArray } from "../../Context/NotesList-Store.jsx";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Copybtn from "../../Components/Copybtn/Copybtn.jsx";

const CLangQues = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showques, setShowQues] = useState(false);
  const handleQuesChange = () => {
    setShowQues(!showques);
  };
  const { darkMode } = useContext(NotesArray);
  return (
    <>
      <Backbar previosPage={"/"} />

      <div className={style.main}>
        {showques ? (
          <CQuesBar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setShowQues={setShowQues}
          />
        ) : null}
        <div className={style.menu}>
          {CquesArray.map(({ id, Ques }) => {
            return (
              <>
                <div
                  className={`${style.quesbox} ${
                    currentPage === id ? "activeCode" : null
                  } `}
                  onClick={() => {
                    setCurrentPage(id);
                  }}
                  key={id}
                >
                  <div className={style.ques}>{Ques}</div>
                </div>
              </>
            );
          })}
        </div>

        <div className={style.forscroll}>
          {CquesArray.filter(({ id }) => id === currentPage).map(
            ({ id, Ques, Answer, Output, Image }) => {
              return (
                <div className={style.answerSheet}>
                  <div className={style.question}>{Ques}</div>
                  <div className={style.copySolution}>
                    <h6>Solution:-</h6>
                    <Copybtn copythis={Answer}></Copybtn>
                  </div>
                  <ReactSyntaxHighlighter
                    className={style.Answer}
                    language="C"
                    style={!darkMode ? stackoverflowDark : docco}
                  >
                    {Answer}
                  </ReactSyntaxHighlighter>
                  <h6>Output:-</h6>
                  <div
                    dangerouslySetInnerHTML={{ __html: Output }}
                    className={style.Output}
                  ></div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className={style.changeButton} onClick={handleQuesChange}>
        <PiSlidersHorizontalLight size={25} />
      </div>
    </>
  );
};

export default CLangQues;
