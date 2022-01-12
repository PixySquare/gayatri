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
            Here at Gayatri Institute, we strive towards providing our students with the best teaching services, an enthusiastic and well qualified faculty along with affordable fees. Our focus upon building Strong conceptual understanding of topics among students helps us achieve our desired results; not only excellent marksheets, but smart individuals with an aptitude and appetite for grasping a wide range of concepts. While our Primary focus is on fundamental classes i.e I-VIII, we also have well structured tutoring services for higher classes i.e. IX-XII.
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
          In the eventful month of August 2015, the family of Gayatri Institute started our journey to provide affordable education in the country. From there on, we have looked back only to reminisce about the beautiful journey we have had. Success speaks for itself as Gayatri Institute in the past few years has gone from a one center with over 5 branches opening all over Delhi. 
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
