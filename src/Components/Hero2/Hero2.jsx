import styles from "./Hero2.module.css";
import Batches from "../../assets/Batches.png";
import PYQ from "../../assets/PYQ.png";
import News from "../../assets/News.png";

const Hero2 = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>QUICK ACCESS</h2>
        <hr />
        <div className={styles.container_content}>
          <div className={styles.media_alignment}>
            <div className={styles.box}>
              <div className={styles.logo}>
                <img height="60px" src={Batches} alt="box-1" />
              </div>
              <div className={styles.paraedit}>
                <p className={styles.Para_heading}>Batches</p>
                <p>View the list of all batches</p>
              </div>
            </div>
            {/* box 2         */}
            <div className={styles.box}>
              <div className={styles.logo}>
                <img height="50px" src={PYQ} alt="box2" />
              </div>
              <div className={styles.paraedit}>
                <p className={styles.Para_heading}>Previous Year Questions</p>
                <p>View the list of all PYQs of 2015-2023 </p>
              </div>
            </div>
          </div>
          {/* box-3 */}
          <div className={`${styles.box} ${styles.box3}`}>
            <div className={styles.logo}>
              <img height="60px" src={News} alt="box3" />
            </div>
            <div className={styles.paraedit}>
              <p className={styles.Para_heading}>Bihar Board News</p>
              <p>View the latest news of biharboard</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero2;
