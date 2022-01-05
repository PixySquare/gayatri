import styles from "./styles.module.css";
import img2 from "../../public/assets/images/intro2.png";
import person from "../../public/assets/images/person.png";
import person2 from "../../public/assets/images/person2.png";
import Image from "next/image";

function AboutUs() {
  return (
    <div className={styles.wrapper} id="aboutus">
      <h1
        style={{
          textAlign: "left",
          fontSize: "48px",
          fontWeight: "bolder",
          marginBottom: 10,
        }}
      >
        {" "}
        About Us
      </h1>
      <Image src="/assets/underlines/1.png" width="200" height="20" />

      <div className={styles.flexContainer}>
        <div className={styles.innerContainer}>
          <p
            className={styles.lightFont}
            style={{
              marginTop: 6,
              textAlign: "left",
              width: "80%",
              marginRight: "auto",
            }}
          >
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
        <Image src={img2} alt={"image"} />
      </div>

      <div className={styles.secondDiv}>
        <div style={{ textAlign: "left" }}>
          <Image src={person} />
          <h4>Name Surname</h4>
          <p className={styles.lightFont} style={{ marginTop: -20 }}>
            Position
          </p>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.lightFont}>
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
          <div className={styles.innerFlexDiv}>
            <div style={{ textAlign: "left" }}>
              <Image src={person2} height="280px" width="210px" />
              <h4>Name Surname</h4>
              <p className={styles.lightFont} style={{ marginTop: -20 }}>
                Position
              </p>
            </div>
            <div style={{ textAlign: "left" }}>
              <Image src={person2} height="280px" width="210px" />
              <h4>Name Surname</h4>
              <p className={styles.lightFont} style={{ marginTop: -20 }}>
                Position
              </p>
            </div>
            <div style={{ textAlign: "left" }}>
              <Image src={person2} height="280px" width="210px" />
              <h4>Name Surname</h4>
              <p className={styles.lightFont} style={{ marginTop: -20 }}>
                Position
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
