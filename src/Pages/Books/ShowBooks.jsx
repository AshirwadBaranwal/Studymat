import React from "react";
import styles from "./ShowBooks.module.css";
import Backbar from "../../Components/BackBar/Backbar";
import { BookArray } from "../../Arrays/BooksArray";
import { Link } from "react-router-dom";

function ShowBooks() {
  return (
    <>
      <Backbar />
      <div className={styles.main}>
        {BookArray.map((books) => {
          return (
            <Link key={books.id} to={books.URL} className={styles.box}>
              <div className={styles.image}>
                <img src={books.BImage} alt="BookImage" />{" "}
              </div>
              <div className={styles.label}>
                <p> {books.BName}</p>
                <p>Books' Author: {books.BAuth}</p>
                <p> {books.Cost}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default ShowBooks;
