import styles from "./styles.module.css";
import img2 from "../../public/assets/images/intro2.png";
import person from "../../public/assets/images/owner.jpeg";
import person12 from "../../public/assets/images/person.jpeg";
import person13 from "../../public/assets/images/person2.jpeg";
import person14 from "../../public/assets/images/person3.jpeg";

import person2 from "../../public/assets/images/person2.png";
import Image from "next/image";

function AboutUs() {
  return (
    <div className={styles.wrapper} id="aboutus">
      <span
        style={{
          textAlign: "left",
          fontWeight: "900",
          marginBottom: 0,
          fontFamily: "chalkie2",
          color: "#5279ba",
        }}
        className="headings"
      >
        {" "}
        ABOUT US
      </span>

      <div className={styles.flexContainer}>
        <div className={styles.innerContainer}>
          <p
            className={styles.lightFont}
            style={{
              marginTop: 6,
              textAlign: "left",
              width: "80%",
              marginRight: "auto",
              fontFamily: "poppins",
            }}
          >
            Here at Gayatri Institute, we strive towards providing our students
            with the best teaching services, an enthusiastic and well qualified
            faculty along with affordable fees. Our focus upon building Strong
            conceptual understanding of topics among students helps us achieve
            our desired results; not only excellent marksheets, but smart
            individuals with an aptitude and appetite for grasping a wide range
            of concepts. While our Primary focus is on fundamental classes i.e
            I-VIII, we also have well structured tutoring services for higher
            classes i.e. IX-XII.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src={img2} alt={"image"} />
        </div>
      </div>

      <div className={styles.secondDiv}>
        <div
          className={styles.mainImgUpper}
          style={{
            textAlign: "left",
            marginTop: "1.6vh",
            height: "40%",
            width: "35%",
          }}
        >
          <Image src={person} alt={"image"} />
          <h4
            style={{ marginTop: "0", marginBottom: "0", fontFamily: "poppins" }}
          >
            Shubham Dubey
          </h4>
          <p
            className={styles.lightFont}
            style={{ fontFamily: "poppins", marginTop: -20, marginTop: "0" }}
          >
            Senior Manager
          </p>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.lightFont} style={{ fontFamily: "poppins" }}>
            In the eventful month of August 2015, the family of Gayatri
            Institute started our journey to provide affordable education in the
            country. From there on, we have looked back only to reminisce about
            the beautiful journey we have had. Success speaks for itself as
            Gayatri Institute in the past few years has gone from a one center
            with over 5 branches opening all over Delhi.
          </p>
          <div
            className={styles.mainImg}
            style={{
              textAlign: "left",
              marginTop: "1.6vh",
              height: "40%",
              width: "35%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image src={person} alt={"image"} />
            <h4
              style={{
                marginTop: "0",
                marginBottom: "0",
                fontFamily: "poppins",
              }}
            >
              Shubham Dubey
            </h4>
            <p
              className={styles.lightFont}
              style={{ fontFamily: "poppins", marginTop: -20, marginTop: "0" }}
            >
              Senior Manager
            </p>
          </div>
          <div className={styles.innerFlexDiv}>
            <div
              className={styles.rowImg}
              style={{ fontFamily: "poppins", textAlign: "left" }}
            >
              <Image src={person12} height="280px" width="210px" />
              <h4
                style={{
                  fontFamily: "poppins",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                Pratik Goyal
              </h4>
              <p
                className={styles.lightFont}
                style={{ marginTop: -20, marginTop: "0" }}
              >
                Position
              </p>
            </div>
            <div
              className={styles.rowImg}
              style={{ fontFamily: "poppins", textAlign: "left" }}
            >
              <Image src={person13} height="280px" width="210px" />
              <h4
                style={{
                  fontFamily: "poppins",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                Mishank Goyal
              </h4>
              <p
                className={styles.lightFont}
                style={{ marginTop: -20, marginTop: "0" }}
              >
                Position
              </p>
            </div>
            <div
              className={styles.rowImg}
              style={{ fontFamily: "poppins", textAlign: "left" }}
            >
              <Image src={person14} height="280px" width="210px" />
              <h4
                style={{
                  fontFamily: "poppins",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                Dr. Ashok Arya
              </h4>
              <p
                className={styles.lightFont}
                style={{ marginTop: -20, marginTop: "0" }}
              >
                Hod science
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
