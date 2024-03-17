import React from "react";
import style from "./About.module.css";
import sign from "/sign.png";
import logo from "../../assets/Weblogo.png";
import me from "/me.jpg";
import { CountArray } from "../../Arrays/CountArray";

function About() {
  return (
    <>
      <div className={style.main}>
        <div className={style.aboutus}>
          <div className={style.fLeft}>
            <h2>About Us</h2>
            <p>
              Discover everything you need for your BCA studies! Our website is
              packed with easy-to-understand study materials for your undergrad
              program. Whether it's coding or databases, we've got the tools to
              help you succeed. Jump into a sea of knowledge designed to make
              your BCA journey smoother. Explore, learn, and ace your exams with
              our user-friendly study hub!
            </p>
          </div>
          <div className={style.fRight}>
            <div className={style.card}>
              <div className={style.card_inner}>
                <div className={style.card_front}>
                  <img height="200px" src={me} alt="me" />
                </div>
                <div className={style.card_back}>
                  <h4>Founder</h4>
                  <img height="70px" width="70px" src={logo} alt="logo" />
                  <p> Ashirwad Kumar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ************count*********
         ************count*********
         ************count********* */}
        <div className={style.count}>
          {CountArray.map((items, index) => {
            return (
              <div
                className={style.card2}
                key={index}
                // style={{ width: "100px" }}
              >
                <div className={style.content}>
                  <div
                    className={style.front}
                    style={{ backgroundColor: `${items.color}` }}
                  >
                    <p className={style.title}>{items.title}</p>
                    <p className={style.subtitle}>
                      {items.numb < 10 ? "0" + items.numb : items.numb}
                    </p>
                  </div>
                  <div
                    className={style.back}
                    style={{ backgroundColor: `${items.color}` }}
                  >
                    <p className={style.description}>{items.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;
