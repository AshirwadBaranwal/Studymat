import React, { useContext, useState } from "react";
import Hero from "../Hero/Hero";
import Hero2 from "../Hero2/Hero2";
import styles from "./Maincomp.module.css";
import weblogo from "../../assets/Weblogo.png";
import Holiday from "../../assets/Holiday.svg";
import Syllabus from "../../assets/Books.svg";
import { Link } from "react-router-dom";
import Codeques from "../../assets/codeQues.svg";

import Cmodal from "../CodeModal/Cmodal";

function Maincomp() {
  const [showModal, setShowModal] = useState(false);
  function closeCmodal() {
    return setShowModal(false);
  }
  return (
    <>
      <div className={styles.wholeWidth}>
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
          <Link to="/Holiday" className={styles.box}>
            <div className={styles.imgpart}>
              <img height="50px" src={Holiday} alt="" />
            </div>
            <div className={styles.contentpart}>
              <p>Holiday</p>
            </div>
          </Link>
          <Link
            to="https://drive.google.com/file/d/1YCBt9BWLOayWsWLiB6wA-aB9X1uJKtjl/view?usp=sharing"
            target="blank"
            className={styles.box}
          >
            <div className={styles.imgpart}>
              <img height="40px" src={Syllabus} alt="" />
            </div>
            <div className={styles.contentpart}>
              <p>Syllabus</p>
            </div>
          </Link>
          <div className={styles.box} onClick={() => setShowModal(true)}>
            <div className={styles.imgpart}>
              <img height="40px" src={Codeques} alt="LinkImage" />
            </div>
            <div className={styles.contentpart}>
              <p>Code Ques</p>
            </div>
          </div>
        </div>
        <div className={styles.greetings}>
          <h2>❤️ From BCA Guide </h2>
        </div>
        {showModal && <Cmodal closeCmodal={closeCmodal} />}
      </div>
    </>
  );
}

export default Maincomp;
