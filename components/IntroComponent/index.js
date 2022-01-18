import Image from "next/image";
import img from "../../public/assets/images/default.png";
import styles from "./styles.module.css";
import { Fade } from "react-awesome-reveal";

function IntroComponent() {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.outerWrapper}></div>
      <Fade>
        <div className={styles.card}>
          <span
            className={styles.hq}
            style={{ fontFamily: "poppins", lineHeight: 0.3 }}
          >
            We offer tuition for students of classes
          </span>
          <h2
            className={styles.pq}
            style={{ fontFamily: "poppins", margin: 0 }}
          >
            {" "}
            1st to 12th class
          </h2>
          <h2
            className={styles.pq}
            style={{ fontFamily: "poppins", margin: 0 }}
          >
            {" "}
            All subjects
          </h2>
        </div>
      </Fade>
    </div>
  );
}

export default IntroComponent;
