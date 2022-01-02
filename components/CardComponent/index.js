import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
function CardComponent() {
  return (
    <div className={styles.wrapper}>
      <Image src={img} />
      <div className={styles.info}>
        <p style={{ fontWeight: "bolder" }}>Name Surname</p>
        <p>Class 1</p>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
    </div>
  );
}

export default CardComponent;
