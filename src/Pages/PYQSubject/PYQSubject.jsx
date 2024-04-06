import React, { useEffect, useState } from "react";
import style from "./PYQSubject.module.css";
import { Link, useParams } from "react-router-dom";
import { FaFolder } from "react-icons/fa";
import Backbar from "../../Components/BackBar/Backbar";
import NPYQArray from "../../Arrays/NPYQArray";
function PYQSubject() {
  const Part = useParams();

  const [ArrayToMap, setArrayToMap] = useState([]);

  useEffect(() => {
    const newNPYQArray = NPYQArray.filter((items) => items.Part === Part.Part);
    const SubjectArray = newNPYQArray[0].Subjects;
    setArrayToMap(SubjectArray);
  }, []);

  return (
    <>
      <Backbar previosPage={"/PYQ"}></Backbar>
      <div className={style.Mainpage}>
        {ArrayToMap.map((items) => {
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
      </div>
    </>
  );
}

export default PYQSubject;
