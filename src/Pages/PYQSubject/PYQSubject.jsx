import React from "react";
import style from "./PYQSubject.module.css";
import { Link, useParams } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import Backbar from "../../Components/BackBar/Backbar";
import NPYQArray from "../../Arrays/NPYQArray";
function PYQSubject() {
  const Part = useParams();
  const newNPYQArray = NPYQArray.filter((items) => items.Part === Part.Part);
  const SubjectArray = newNPYQArray[0].Subjects;

  return (
    <>
      <Backbar previosPage={"/PYQ"}></Backbar>
      <div className={style.Mainpage}>
        {SubjectArray.map((items) => {
          return (
            <Link
              to={`/PYQ/${items.id}/${items.SubName}`}
              className={style.Parts}
            >
              <span>
                <FaFolder color="#ffcc40" size={25} />
              </span>
              {items.SubName}
            </Link>
          );
        })}

        {/* <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Honours(Paper-1)
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Hindi
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          English
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Mathematics
        </Link> */}
      </div>
    </>
  );
}

export default PYQSubject;