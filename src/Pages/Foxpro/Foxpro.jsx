import React, { useState } from "react";
import { useEffect } from "react";
import style from "./Foxpro.module.css";
import "../../App.css";
import Backbar from "../../Components/BackBar/Backbar.jsx";

function Foxpro() {
  const [foxData, setFoxData] = useState([]);
  useEffect(() => {
    fetch("Foxpro.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFoxData(data);
      });
  }, []);
  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 1;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = foxData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(foxData.length / recordsPerPage);

  return (
    <>
      <Backbar previosPage={"/ShowNotes/Practical"}></Backbar>
      <div className={style.main}>
        {foxData.map((items) => {
          return (
            <>
              <section>
                <h5 className={style.mainheading}>{items.Heading}</h5>
                {items.Heading ? <hr></hr> : null}
                <h6 className={style.subheading}>{items.Subheading}</h6>
                {items.Html_Details ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: items.Html_Details }}
                  />
                ) : null}

                {/* Details */}

                <div className={style.detail}>{items.Details}</div>
                {/* For image */}

                {items.IMG ? (
                  <div className={style.imageholder}>
                    <img src={items.IMG} alt="" />
                  </div>
                ) : null}

                {/* detAfterImage */}

                {items.detAfterImage ? (
                  <div>
                    {items.detAfterImage}
                    <br></br>
                  </div>
                ) : null}
              </section>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Foxpro;
