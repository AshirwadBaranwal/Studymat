import React, { useContext, useState } from "react";
import style from "./CLangQues.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoMdCopy } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import CquesArray from "../../Arrays/CquesArray";
import CquesArrayQuestions from "../../Arrays/CquesArray";
import { NotesArray } from "../../Context/NotesList-Store";

const CLangQues = () => {
  const { darkMode, codeLoading, setCodeLoading } = useContext(NotesArray);
  const [QNo, setQNo] = useState(0);
  const [copybtnmark, setcopybtnmark] = useState(<IoMdCopy size={20} />);
  return (
    <>
      <div>
        {CquesArray.map(({ id, Question }) => {
          return (
            <div
              className={`list-group list-group-flush border-bottom scrollarea ${style.navigation}`}
              key={id}
            >
              <a
                href="#"
                class="list-group-item list-group-item-action active py-3 lh-sm"
                aria-current="true"
              >
                <div class="d-flex w-100 align-items-center justify-content-between">
                  <small>{Question}</small>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CLangQues;
