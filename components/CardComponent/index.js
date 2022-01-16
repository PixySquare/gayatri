import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
function CardComponent() {
  return (
    <div className={styles.wrapper}>
      <Image src={img} />
      <div className={styles.info}>
        <p style={{ fontWeight: "bolder", margin: 0 }}>
          Name Surname - Class 1
        </p>
        <p styles={{ margin: 0, textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur{" "}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
