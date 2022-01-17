import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
function CardComponent() {
  return (
    <div className={styles.wrapper}>
      <Image src={img} />
      <div className={styles.info}>
        <p style={{ fontFamily: "poppins", ontWeight: "bolder", margin: 0 }}>
          Name Surname - Class 1
        </p>
        <p styles={{ fontFamily: "poppins", margin: 0, fontSize: "3rem" }}>
          Lorem ipsum dolor{" "}
        </p>
      </div>
      <br />
    </div>
  );
}

export default CardComponent;
