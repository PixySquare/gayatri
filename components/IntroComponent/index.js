import Image from "next/image";
import img from "../../public/assets/images/default.png";
import styles from "./styles.module.css";

function IntroComponent() {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.upperContainer}>
        <h4 style={{ marginBottom: 0 }}>Welcome To Gayatri Institute</h4>
        <p className={styles.lightFont}>
          We help children to clear their fundamental concepts{" "}
        </p>
      </div>
      <div className={styles.flexContainer}>
        <Image src={img} />
        <div className={styles.innerContainer}>
          <p className={styles.lightFont} style={{ marginTop: 0 }}>
            We give them solid conceptual understanding to help them clearn
            their understanding of the subject, and make them fall in love with
            it!
          </p>
          <h3 style={{ marginTop: 0 }}>
            We offer tuition <br /> for students of classes <br />
            <span style={{ fontSize: "150%" }}>1st to 12th </span>
            <br />
            <span className={styles.lightFont}>All subjects</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default IntroComponent;
