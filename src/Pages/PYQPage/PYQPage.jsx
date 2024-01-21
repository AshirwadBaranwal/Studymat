import React from "react";
import style from "./PYQPage.module.css";
import { PYQArray } from "../../Arrays/PYQArray";
import SubBanner from "../../assets/SubBanner.png";
import { Link } from "react-router-dom";
import Backbar from "../../Components/BackBar/Backbar";

function PYQPage() {
  return (
    <>
      <Backbar previosPage="/"></Backbar>
      <div className={style.banner}>
        <img width="100%" height="80px" src={SubBanner} alt="Banner" />
        <h2>Previous Year Questions</h2>
      </div>
      <div className={style.main}>
        {PYQArray.map((items) => {
          return (
            <Link
              to={items.URL}
              key={items.id}
              target="blank"
              className={style.Bar}
            >
              <div className={style.heading}>
                <p>
                  {items.Subj}({items.Year})
                </p>
                <p>Year-{items.Part}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default PYQPage;
