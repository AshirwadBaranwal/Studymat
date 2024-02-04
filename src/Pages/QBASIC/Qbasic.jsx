import React, { useContext, useEffect, useState } from "react";
import styles from "./Qbasic.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { nnfxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../App.css";
import { IoMdCopy } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { QbasicprintArray } from "../../Arrays/Qbasicarray";
import Backbar from "../../Components/BackBar/Backbar";
import { NotesArray } from "../../Context/NotesList-Store";
import copy from "copy-to-clipboard";

function Qbasic() {
  const { darkMode, codeLoading, setCodeLoading } = useContext(NotesArray);
  useEffect(() => {
    setCodeLoading("loaded");
  }, []);

  const [copybtnmark, setcopybtnmark] = useState(<IoMdCopy size={20} />);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = QbasicprintArray.slice(firstIndex, lastIndex);
  const npage = Math.ceil(QbasicprintArray.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function changeCpage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <Backbar previosPage="/"></Backbar>
      {/* <h4 className={styles.heading}>QBASIC QUESTION SOLUTION</h4> */}
      <nav>
        <ul className={styles.pagination}>
          {numbers.map((n, i) => {
            return (
              <li
                className={`  ${styles.Page_item} ${
                  currentPage === n ? "active" : ""
                }`}
                key={i}
                onClick={() => changeCpage(i + 1)}
              >
                <span className={styles.pagelink}>{n}</span>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.QwhPage}>
        {codeLoading === "Loading" ? (
          <div className={styles.loader}>Loading....</div>
        ) : (
          records.map((p) => {
            return (
              <div key={p.id} className={styles.container}>
                <div className={styles.QuesBox} style={{ fontSize: "16px" }}>
                  <span style={{ fontWeight: 900 }}>Question:{p.id}</span>
                  <br /> {p.ques}
                </div>
                {p.Qimg ? (
                  <div className={styles.Qimgbg}>
                    <img src={p.Qimg} alt="Qimage" />{" "}
                  </div>
                ) : null}

                <div className={styles.copybtnsec}>
                  <h6>Solution:</h6>
                  <button
                    onClick={() => {
                      copy(p.Code);
                      setcopybtnmark(
                        <FaRegCircleCheck color="green" size={20} />
                      );
                      setTimeout(() => {
                        setcopybtnmark(<IoMdCopy size={20} />);
                      }, 1000);
                    }}
                  >
                    {copybtnmark}
                  </button>
                </div>
                {/* code */}
                <SyntaxHighlighter
                  className={styles.codeBox}
                  language="qbasic"
                  style={!darkMode ? nnfxDark : docco}
                >
                  {p.Code}
                </SyntaxHighlighter>
              </div>
            );
          })
        )}
      </div>
      <div className={styles.arrowKey}>
        <li onClick={prePage}>
          <span>Prev</span>
        </li>
        <li onClick={nextPage}>
          <span>Next</span>
        </li>
      </div>
    </>
  );
}

export default Qbasic;
