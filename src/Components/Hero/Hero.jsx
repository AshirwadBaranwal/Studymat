import React, { memo, useContext } from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/Hero2img.png";
import { NotesArray } from "../../Context/NotesList-Store";

const Hero = () => {
  const { theme, darkMode } = useContext(NotesArray);

  return (
    <div className={styles.Hero}>
      <div className={styles.HeroL}>
        <img
          style={{
            filter:
              // theme === "Dark"
              darkMode
                ? "drop-shadow(0px 0px 50px #90d1cd)"
                : "drop-shadow(0px 0px 0px #7110b2)",
            width: "80%",
          }}
          src={HeroImage}
          alt="HeroImage"
        />
      </div>
      <div className={styles.HeroR}>
        <div className={styles.HeroRin}>
          <h1>Your learning will be great with us.</h1>
          <p>
            We are providing the biggest library for students in BCA. Here you
            will get all the
            <span style={{ color: "var(--btn-clr)", padding: "0px 6px" }}>
              Notes, PYQs, Books, Syllabus
            </span>
            and many more such things.
          </p>
          <div className={styles.quote}>Study & Evolve</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
