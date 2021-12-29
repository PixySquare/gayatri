import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
import CardComponent from "../CardComponent";

function FounderSection() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.imageDiv}>
          <Image src={img}  alt={"image"}/>
        </div>
        <div className={styles.infoDiv}>
          <h1>Founders Name</h1>
          <h3>Text</h3>
          <p className={styles.lightFont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor. Ornare lectus sit amet est
            placerat in egestas. Ultricies lacus sed turpis tincidunt. In nisl
            nisi scelerisque eu ultrices vitae auctor. Felis imperdiet proin
            fermentum leo vel orci. Sed odio morbi quis commodo odio aenean.
          </p>
        </div>
      </div>
      <div className={styles.flexDiv}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default FounderSection;
