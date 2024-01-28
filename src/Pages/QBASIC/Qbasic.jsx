import React, { useContext, useEffect } from "react";
import styles from "./Qbasic.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { QbasicprintArray } from "../../Arrays/Qbasicarray";
import Backbar from "../../Components/BackBar/Backbar";
import { NotesArray } from "../../Context/NotesList-Store";

function Qbasic() {
  const { codeLoading, setCodeLoading } = useContext(NotesArray);
  useEffect(() => {
    setCodeLoading("loaded");
  }, [codeLoading]);
  return (
    <>
      <Backbar previosPage="/"></Backbar>
      <h4 className={styles.heading}>QBASIC QUESTION SOLUTION</h4>
      <div className={styles.QwhPage}>
        {codeLoading === "Loading" ? (
          <div className={styles.loader}>Loading....</div>
        ) : (
          QbasicprintArray.map((p, index) => {
            return (
              <div key={p.id} className={styles.container}>
                <div className={styles.QuesBox}>
                  <span style={{ fontWeight: 900 }}>Question:{index + 1}</span>
                  <br /> {p.ques}
                </div>

                <h6>Solution:</h6>
                {/* code */}
                <SyntaxHighlighter
                  className={styles.codeBox}
                  language="qbasic"
                  style={docco}
                >
                  {p.Code}
                </SyntaxHighlighter>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Qbasic;
