import Image from "next/image";
import img from "../../public/assets/images/default.png";
import styles from "./styles.module.css";

function IntroComponent() {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.outerWrapper}></div>
      <div className={styles.card}>
        <span style={{ fontFamily: "poppins", fontWeight: "normal" }}>
          We offer tuition for students of classes
        </span>
        <h2 style={{ fontFamily: "poppins", margin: 0 }}> 1st to 12th</h2>
        <h2 style={{ fontFamily: "poppins", margin: 0 }}> All subjects</h2>
      </div>
    </div>
  );
}

export default IntroComponent;
