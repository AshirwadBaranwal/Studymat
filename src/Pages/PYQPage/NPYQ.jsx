import React from "react";
import style from "./NPYQ.module.css";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";
import Backbar from "../../Components/BackBar/Backbar";
import NPYQArray from "../../Arrays/NPYQArray";

function NPYQ() {
  return (
    <>
      <Backbar previosPage={"/"}></Backbar>
      <div className={style.Mainpage}>
        {NPYQArray.map((items) => {
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
    </>
  );
}

export default NPYQ;
