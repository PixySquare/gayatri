import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
function CardComponent() {
  return (
    <div className={styles.wrapper}>
      <Image src={img} alt={"image"} />
      <div className={styles.info}>
        <p>Name Surname</p>
        <p>Class 1</p>
      </div>
    </div>
  );
}

export default CardComponent;
