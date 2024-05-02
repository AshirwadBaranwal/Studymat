import React, { useEffect, useState } from "react";
import style from "./PYQPdfs.module.css";
import { Link, useParams } from "react-router-dom";
import { MdPictureAsPdf } from "react-icons/md";
import Backbar from "../../Components/BackBar/Backbar";
import NPYQArray from "../../Arrays/NPYQArray";
import { MdOutlineDownloadForOffline } from "react-icons/md";

function PYQPdfs() {
  const PSubject = useParams();
  const [ArrayToMap, setArrayToMap] = useState([]);

  useEffect(() => {
    const newNPYQArray = NPYQArray.filter(
      (items) => items.Part === PSubject.Part
    );
    const SubjectArray = newNPYQArray[0].Subjects;
    const newSubjectArray = SubjectArray.filter(
      (items) => items.SubName === PSubject.PSubject
    );

    const PDFArray = newSubjectArray[0].PDFs;
    setArrayToMap(PDFArray);
  }, []);

  return (
    <>
      <Backbar previosPage={-1}></Backbar>
      <div className={style.Wholewidth}>
        <div className={style.Mainpage}>
          {ArrayToMap.map((items) => {
            const newlink = "https://drive.google.com/uc?export=download&id=";
            return (
              <div className={style.OverParts}>
                <Link to={items.Link} target="_blank" className={style.Parts}>
                  <span>
                    <MdPictureAsPdf color="var(--btn-clr)" size={25} />
                  </span>
                  {`${PSubject.PSubject}-${items.Year}`} .pdf
                </Link>

                <Link
                  className={style.download}
                  to={`${newlink}${items.Link.slice(32, 65)}`}
                >
                  <MdOutlineDownloadForOffline
                    size={25}
                    color="var(--btn-clr)"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PYQPdfs;
