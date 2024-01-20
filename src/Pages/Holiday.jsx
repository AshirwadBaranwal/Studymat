import React from "react";
import HolidayP from "../assets/HolidayP.jpg";

function Holiday() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img height="500px" src={HolidayP} alt="Holiday" />
    </div>
  );
}

export default Holiday;
