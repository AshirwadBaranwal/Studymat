import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/Hero2img.png";

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroL}>
        <img src={HeroImage} alt="HeroImage" />{" "}
      </div>
      <div className={styles.HeroR}>
        <div className={styles.HeroRin}>
          <h1>You will learn great with us.</h1>
          <p>
            We are providing the biggest library for students in BCA. Here you
            will get all the
            <span style={{ color: "#702cf5", padding: "0px 6px" }}>
              Notes, PYQs, Books, Syllabus
            </span>
            and many more such things.
          </p>
          <div className={styles.quote}>Study & Evolve</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
