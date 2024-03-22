import React, { useState } from "react";
import { useEffect } from "react";
import style from "./Foxpro.module.css";

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
  return (
    <div className={style.main}>
      {foxData.map((items) => {
        const tablebody = items.Tbody;
        console.log(tablebody);
        return (
          <>
            <section>
              <h5 className={style.mainheading}>{items.Heading}</h5>
              {items.Heading ? <hr></hr> : null}
              <h6 className={style.subheading}>{items.Subheading}</h6>
              {items.Html_Details ? (
                <div dangerouslySetInnerHTML={{ __html: items.Html_Details }} />
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
  );
}

export default Foxpro;
