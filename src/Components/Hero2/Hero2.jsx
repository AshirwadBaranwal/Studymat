import styles from "./Hero2.module.css";
import NotesDark from "../../assets/undraw_notes_re_pxhw.svg";
import Notes from "../../assets/undraw_notes_re_pxhw(1).svg";
import PYQ from "../../assets/undraw_questions_re_1fy7.svg";
import PYQDark from "../../assets/undraw_questions_re_1fy7(1).svg";
import Books from "../../assets/undraw_book_lover_re_rwjy.svg";
import BooksDark from "../../assets/undraw_book_lover_re_rwjy(1).svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotesArray } from "../../Context/NotesList-Store";

const Hero2 = () => {
  const { theme } = useContext(NotesArray);

  return (
    <>
      <div className={styles.container}>
        <h2>QUICK ACCESS</h2>
        <hr />
        <div className={styles.container_content}>
          <div className={styles.media_alignment}>
            <Link to="/Subject" className={styles.box}>
              <div className={styles.logo}>
                {theme === "Dark" ? (
                  <img height="60px" src={Notes} alt="box-1" />
                ) : (
                  <img height="60px" src={NotesDark} alt="box-1" />
                )}
              </div>
              <div className={styles.paraedit}>
                <p className={styles.Para_heading}>Notes</p>
                <p>Get handwritten notes of all subject.</p>
              </div>
            </Link>
            {/* box 2  */}
            <Link to="/PYQ" className={styles.box}>
              <div className={styles.logo}>
                {theme === "Dark" ? (
                  <img height="60px" src={PYQ} alt="box-1" />
                ) : (
                  <img height="60px" src={PYQDark} alt="box-1" />
                )}
              </div>
              <div className={styles.paraedit}>
                <p className={styles.Para_heading}>Previous Year Questions</p>
                <p>View the list of all PYQs of 2015-2023 </p>
              </div>
            </Link>
          </div>
          {/* box-3 */}
          <Link to="/Books" className={`${styles.box} ${styles.box3}`}>
            <div className={styles.logo}>
              {theme === "Dark" ? (
                <img height="60px" src={Books} alt="box-1" />
              ) : (
                <img height="60px" src={BooksDark} alt="box-1" />
              )}
            </div>
            <div className={styles.paraedit}>
              <p className={styles.Para_heading}>Books</p>
              <p>All books related to BCA(Patliputra University)</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Hero2;
