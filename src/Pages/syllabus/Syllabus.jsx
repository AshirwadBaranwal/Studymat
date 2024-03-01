import React from "react";
import style from "./Syllabus.module.css";

function Syllabus() {
  return (
    <section className={style.mainpage}>
      <h6>Syllabus</h6>
      <p className={style.guidline}>
        As per guidelines of the UGC/Patliputra University (Hons.) Paper
      </p>
      <h6>Hons. — First Year</h6>
      <h6>PAPER-I</h6>
      <h6>Group- 1</h6>

      {/* ********COMPUTER FUNDAMENTALS*********      */}
      {/* ********COMPUTER FUNDAMENTALS*********      */}

      <h6>COMPUTER FUNDAMENTALS</h6>
      <div>
        <div>
          <span className={style.chapterName}>
            Introduction to Computers :{" "}
          </span>
          What is Computer? Comparison between computer and human brain,
          Characteristics of computer, Computer applications.
        </div>
        <div>
          <span className={style.chapterName}>History of Computers : </span>
          Initial development, Generation of computer, Evolution of Personal
          Computer.
        </div>
        <div>
          <span className={style.chapterName}>Computer Organization : </span>
          Basic Units of computer, Block diagram of computer, Input unit,
          Processing unit, Output unit, Storage unit.
        </div>
        <div>
          <span className={style.chapterName}>Types of Printers : </span>Hard
          copy output, Impact printers, Non-impact printers, Serial and line
          printers, Dot-Matrix printers, Laser printers, Daisy wheel printers,
          Drum and chain Printers, Thermal printers. External storage devices :
          SASD, DASD, Punch cards, Magnetic Tapes, Blocking utilization factor,
          Magnetic Disk, Tracks, Sectors, Seek time, Rotational latency, Access
          time, Numerical problems.
        </div>
        <div>
          <span className={style.chapterName}>Types of Computers : </span>
          Digital, Analog, Hybrid Computers, General purpose Computers, Turnkey
          Systems, Micro computers, Mini computers, Mainframes, Super Computers.
        </div>
        <div>
          <span className={style.chapterName}>Data Representation : </span>
          Number Systems, Binary system, Binary to Decimal and Decimal to Binary
          conversion. Binary addition, 2's compliment representation, Binary
          subtraction, ASCII and EBCDIC coding.
        </div>
        <div>
          <span className={style.chapterName}>Computer Software : </span>{" "}
          Machine language, Assembly language, High level languages, Compilers,
          Interpreters, Assemblers. Centralized processing, Decentralized
          processing, Distributed processing, Management Information System.
        </div>
        <div>
          <span className={style.chapterName}>Processing Modes : </span>
          Uniprocessor, Multiprocessor, Batch processing, offline data entry,
          On-line processing, On-line data entry, real Time processing, Time
          sharing processing, Electronic mail, Tele text, Tele conferencing.
        </div>
        <div>
          <span className={style.chapterName}>Programming Concepts : </span>
          Programme definition, Characteristics of good programme, Programming
          steps, algorithms, Flowcharts.
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
