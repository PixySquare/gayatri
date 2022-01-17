import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
import { Fade } from "react-awesome-reveal";

function CardComponent() {
  return (
    <div className={styles.wrapper}>
      <Fade>
        <Image src={img} />
      </Fade>
      <div className={styles.info}>
        <p style={{ fontFamily: "poppins", ontWeight: "bolder", margin: 0 }}>
          Name Surname
        </p>
        <p style={{ fontFamily: "poppins", ontWeight: "bolder", margin: 0 }}>
          Class 1
        </p>
        {/* <p styles={{ fontFamily: "poppins", margin: 0, fontSize: "3rem" }}>
          Lorem ipsum dolor{" "}
        </p> */}
      </div>
      <br />
    </div>
  );
}

export default CardComponent;
