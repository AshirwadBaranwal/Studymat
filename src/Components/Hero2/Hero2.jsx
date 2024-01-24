import styles from "./Hero2.module.css";
import Notes from "../../assets/undraw_notes_re_pxhw.svg";
import PYQ from "../../assets/undraw_questions_re_1fy7.svg";
import Books from "../../assets/undraw_book_lover_re_rwjy.svg";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>QUICK ACCESS</h2>
        <hr />
        <div className={styles.container_content}>
          <div className={styles.media_alignment}>
            <Link to="/Subject" className={styles.box}>
              <div className={styles.logo}>
                <img height="60px" src={Notes} alt="box-1" />
              </div>
              <div className={styles.paraedit}>
                <p className={styles.Para_heading}>Notes</p>
                <p>Get handwritten notes of all subject.</p>
              </div>
            </Link>
            {/* box 2  */}
            <Link to="/PYQ" className={styles.box}>
              <div className={styles.logo}>
                <img height="50px" src={PYQ} alt="box2" />
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
              <img height="60px" src={Books} alt="box3" />
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
