import React from "react";
import HolidayP from "../assets/HolidayP.jpg";
import Backbar from "../Components/BackBar/Backbar";

function Holiday() {
  return (
    <>
      <Backbar previosPage="/"></Backbar>
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <img height="500px" src={HolidayP} alt="Holiday" />
      </div>
    </>
  );
}

export default Holiday;
