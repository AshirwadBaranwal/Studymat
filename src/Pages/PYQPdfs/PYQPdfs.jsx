import React from "react";
import style from "./PYQPdfs.module.css";
import { Link, useParams } from "react-router-dom";
import { MdPictureAsPdf } from "react-icons/md";
import Backbar from "../../Components/BackBar/Backbar";
import NPYQArray from "../../Arrays/NPYQArray";

function PYQPdfs() {
  const PSubject = useParams();
  console.log("PSubject;", PSubject);

  const newNPYQArray = NPYQArray.filter(
    (items) => items.Part === PSubject.Part
  );
  const SubjectArray = newNPYQArray[0].Subjects;
  const newSubjectArray = SubjectArray.filter(
    (items) => items.SubName === PSubject.PSubject
  );

  const PDFArray = newSubjectArray[0].PDFs;
  console.log(PDFArray);

  return (
    <>
      <Backbar previosPage={-1}></Backbar>
      <div className={style.Mainpage}>
        {PDFArray.map((items) => {
          return (
            <Link to={items.Link} className={style.Parts}>
              <span>
                <MdPictureAsPdf color="#e4312c" size={25} />
              </span>
              {`${PSubject.PSubject}-${items.Year}`} .pdf
            </Link>
          );
        })}

      </div>
    </>
  );
}

export default PYQPdfs;
