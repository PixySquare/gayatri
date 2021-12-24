import styles from "./styles.module.css";
import img2 from "../../public/assets/images/default.png";
import Image from "next/image";

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{ textAlign: "center", fontSize: "38px" }}> About Us</h1>

      <div className={styles.flexContainer}>
        <div className={styles.innerContainer}>
          <p className={styles.lightFont} style={{ marginTop: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor. Ornare lectus sit amet est
            placerat in egestas. Ultricies lacus sed turpis tincidunt. In nisl
            nisi scelerisque eu ultrices vitae auctor. Felis imperdiet proin
            fermentum leo vel orci. Sed odio morbi quis commodo odio aenean.
            Massa vitae tortor condimentum lacinia quis vel eros donec ac. Sed
            viverra tellus in hac. Egestas sed tempus urna et. Sed viverra
            tellus in hac. Egestas sed tempus urna et.
          </p>
        </div>
        <Image src={img2} />
      </div>
    </div>
  );
}

export default AboutUs;
