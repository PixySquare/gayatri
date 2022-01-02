import Image from "next/image";
import img from "../../public/assets/images/default.png";
import styles from "./styles.module.css";

function IntroComponent() {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.outerWrapper}></div>
      <div className={styles.card}>
        <span>We offer tuition for students of classes</span>
        <br />
        <h3> 1st to 12th</h3>
        <h3> All subjects</h3>
      </div>
    </div>
  );
}

export default IntroComponent;
