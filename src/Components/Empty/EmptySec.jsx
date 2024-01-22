import React from "react";
import EmptyImage from "../../assets/EmptyImage.png";
import styles from "./EmptySec.module.css";

function EmptySec() {
  return (
    <div className={styles.container}>
      <img  src={EmptyImage} alt="EmptyImage" />
      <p>No items here.</p>
    </div>
  );
}

export default EmptySec;
