import React, { useEffect, useState } from "react";
import style from "./NPYQ.module.css";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import Backbar from "../../Components/BackBar/Backbar";
import NPYQArray from "../../Arrays/NPYQArray";

function NPYQ() {
  const [ArrayToMap, setArrayToMap] = useState([]);

  useEffect(() => setArrayToMap(NPYQArray), []);

  return (
    <>
      <Backbar previosPage={"/"}></Backbar>
      <div className={style.Wholewidth}>
      <div className={style.Mainpage}>
        {ArrayToMap.map((items) => {
          return (
            <Link to={`/PYQ/${items.Part}`} className={style.Parts}>
              <span>
                <FaFolder color="#ffcc40" size={25} />
              </span>
              Part-{items.Part}
            </Link>
          );
        })}

        {/* <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Part-2
        </Link>
        <Link className={style.Parts}>
          <span>
            <FaFolder color="#ffcc40" size={25} />
          </span>
          Part-3
        </Link> */}
      </div>
      </div>
    </>
  );
}

export default NPYQ;
