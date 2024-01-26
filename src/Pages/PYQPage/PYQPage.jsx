import React from "react";
import style from "./PYQPage.module.css";
import { PYQArray, simplestCategory } from "../../Arrays/PYQArray";
import SubBanner from "../../assets/SubBanner.jpg";
import { Link } from "react-router-dom";
import Backbar from "../../Components/BackBar/Backbar";
import { useState } from "react";

function PYQPage() {
  const [PYQToPrint, setPYQToPrint] = useState(PYQArray);
  const filter = (Category) => {
    let newarray = PYQArray.filter((P) => P.Year === Category);
    setPYQToPrint(newarray);
  };
  const filterall = () => {
    setPYQToPrint(PYQArray);
  };

  return (
    <>
      <Backbar previosPage="/"></Backbar>
      <div className={style.banner}>
        <img width="100%" height="80px" src={SubBanner} alt="Banner" />
        <h2>Previous Year Questions</h2>
      </div>
      <div className={style.filtercontainer}>
        <div className={style.all} onClick={() => filterall()}>
          All
        </div>
        {simplestCategory.map((category, index) => {
          return (
            <div
              key={index}
              className={style.filterboxes}
              onClick={() => filter(category)}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className={style.main}>
        {PYQToPrint.map((items) => {
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
