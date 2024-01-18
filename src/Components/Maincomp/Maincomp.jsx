import React from "react";
import Hero from "../Hero/Hero";
import Hero2 from "../Hero2/Hero2";
import styles from "./maincomp.module.css";
import weblogo from "../../assets/Weblogo.png";
import Holiday from "../../assets/Holiday.jpg";
import Syllabus from "../../assets/Syllabus.jpg";
import Nimcet from "../../assets/Nimcet.png";

function Maincomp() {
  return (
    <>
      <Hero></Hero>
      <Hero2></Hero2>
      <div className={styles.features}>
        <div className={styles.fleft}>
          <img height="70px" width="70px" src={weblogo} alt="weblogo" />
        </div>
        <div className={styles.fright}>
          <h3>We bring to you</h3>
          <ol>
            <li>Handwritten PDF notes</li>
            <li>All PYQs from 2015-2023</li>
            <li>Important books for BCA</li>
            <li>Holiday Calender</li>
            <li>Upcoming exam details</li>
            <li>Important site Links</li>
          </ol>
        </div>
      </div>
      {/* part2 */}
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.imgpart}>
            <img height="70px" src={Holiday} alt="" />
          </div>
          <div className="contentpart">
            <p>Holiday</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgpart}>
            <img height="60px" src={Syllabus} alt="" />
          </div>
          <div className="contentpart">
            <p>Syllabus</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.imgpart}>
            <img height="40px"src={Nimcet} alt="" />
          </div>
          <div className="contentpart">
            <p>NIMCET</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maincomp;