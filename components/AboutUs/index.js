import styles from "./styles.module.css";
import img2 from "../../public/assets/images/intro2.png";
import person from "../../public/assets/images/owner.jpeg";
import person12 from "../../public/assets/images/person.jpeg";
import person13 from "../../public/assets/images/person2.jpeg";
import person14 from "../../public/assets/images/person3.jpeg";
import { Fade } from "react-awesome-reveal";

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
        About us
      </span>

      <div className={styles.flexContainer}>
        <div className={styles.innerContainer}>
          <p
            className={styles.lightFont + " minorPara"}
            style={{
              textAlign: "left",
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
          className={styles.mainImgUpper + " border"}
          style={{
            textAlign: "left",
            marginTop: "0",
            height: "40%",
            width: "35%",
          }}
        >
          <Fade>
            <Image src={person} alt={"image"} />

            <span
              style={{
                marginTop: "0",
                marginBottom: "0",
                fontFamily: "poppins",
              }}
              className="minorTag"
            >
              Shubham Dubey
            </span>
            <span
              className={styles.lightFont + " minorTagunder"}
              style={{
                fontFamily: "poppins",
                marginTop: -20,
                marginTop: "0",
              }}
            >
              Founder
            </span>
          </Fade>
        </div>

        <div className={styles.rightDiv}>
          <div
            className={styles.mainImg}
            style={{
              textAlign: "left",
              marginTop: "1.3vh",
              marginRight: 20,
              float: "left",
            }}
          >
            <Fade>
              <Image src={person} alt={"image"} />
            </Fade>
            <span
              className="minorTag"
              style={{
                marginTop: "0",
                marginBottom: "0",
              }}
            >
              Shubham Dubey
            </span>
            <span
              className={styles.lightFont + "  minorTagunder"}
              style={{
                marginTop: -20,
                marginTop: "0",
              }}
            >
              Founder
            </span>
          </div>
          <p className={styles.lightFont + " minorPara"}>
            In the eventful month of August 2015, the family of Gayatri
            Institute started our journey to provide affordable education in the
            country. From there on, we have looked back only to reminisce about
            the beautiful journey we have had. Success speaks for itself as
            Gayatri Institute in the past few years has gone from a one center
            with over 5 branches opening all over Delhi.
          </p>
          <br />

          <div className={styles.innerFlexDiv}>
            <div className={styles.rowImg} style={{ textAlign: "left" }}>
              <Fade>
                <Image
                  src={person12}
                  height="280px"
                  width="220px"
                  alt={"Mishank Goyal"}
                />

                <span className="minorTag">Dr. Ashok Arya</span>
                <span
                  className={styles.lightFont + "  minorTagunder"}
                  style={{ marginTop: 6 }}
                >
                  Hod science
                </span>
              </Fade>
            </div>
            <div className={styles.rowImg} style={{ textAlign: "left" }}>
              <Fade>
                <Image
                  src={person13}
                  height="280px"
                  width="220px"
                  alt={"Mishank Goyal"}
                />

                <span className="minorTag">Dr. Ashok Arya</span>
                <span
                  className={styles.lightFont + "  minorTagunder"}
                  style={{ marginTop: 6 }}
                >
                  Hod science
                </span>
              </Fade>
            </div>
            <div className={styles.rowImg} style={{ textAlign: "left" }}>
              <Fade>
                <Image
                  src={person14}
                  height="280px"
                  width="250px"
                  alt={"Mishank Goyal"}
                />

                <span className="minorTag">Dr. Ashok Arya</span>
                <span
                  className={styles.lightFont + "  minorTagunder"}
                  style={{ marginTop: 6 }}
                >
                  Hod science
                </span>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AboutUs;
