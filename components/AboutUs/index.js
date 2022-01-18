import styles from "./styles.module.css";
import img2 from "../../public/assets/images/intro2.png";
import img from "../../public/assets/path.jpeg";

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

      <div className={styles.flexContainer2}>
        <div className={styles.innerContainer}>
          <p
            className={styles.lightFont + " minorPara"}
            style={{
              textAlign: "left",
              marginBottom: 0,
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
        <div className={styles.imgContainer1}>
          <Image src={img2} alt={"image"} />
        </div>
      </div>

      <br />
      <br />
      <br />

      <div
        className="headings2"
        style={{ margin: 0, fontFamily: "chalkie2", color: "#5279ba" }}
      >
        Founder&apos;s Note
      </div>

      <div className={styles.secondDiv}>
        <div className={styles.flexContainer2}>
          <div className={styles.imgContainer}>
            <div>
              <Fade>
                <Image
                  src={person}
                  alt={"image"}
                  height="420px"
                  width="330px"
                />
              </Fade>
            </div>
            <div>
              <div className="minorTag3">Shubham Dubey</div>
              <div
                className={styles.lightFont + "  minorTagunder3"}
                style={{ margin: 0 }}
              >
                Founder
              </div>
            </div>
          </div>
          <div
            className={styles.lightFont + " minorPara"}
            style={{
              alignSelf: "right",
              textAlign: "left",
              width: "50%",
            }}
          >
            Dear Friends, Warm Greetings to you! The term education encompasses
            more than just knowledge and knowing. It is a harmonious blend of
            academia, arts, sports, emotions, attitudes, creativity, nature and
            life itself! And in the world we have built today, the one who is
            adept in all these areas is the one who succeeds. Ours is truly a
            unique program and one that did not happen overnight. Rather, the
            vision of Gayatri Institute was the result of several journeys,
            including my own, which led us down this path. First and foremost,
            we seek to create a stimulating, safe and respectful environment for
            our students. Our teaching system embraces the “whole child”
            supporting their individual differences and learning styles, while
            encouraging each child into engaging interaction and meaningful
            learning.
          </div>
        </div>
      </div>

      <div className={styles.container23}>
        <p className={styles.lightFont + " minorPara"}>
          In the eventful month of August 2015, the family of Gayatri Institute
          started our journey to provide affordable education in the country.
          From there on, we have looked back only to reminisce about the
          beautiful journey we have had. Success speaks for itself as Gayatri
          Institute in the past few years has gone from a one center with over 5
          branches opening all over Delhi.
        </p>
        <div className={styles.innerFlexDiv}>
          <div className={styles.rowImg} style={{ textAlign: "left" }}>
            <Fade>
              <Image
                src={person12}
                height="280px"
                width="220px"
                alt={"Mishank Goyal"}
              />

              <span className="minorTag">Pratik Goyal</span>
              <span
                className={styles.lightFont + "  minorTagunder"}
                style={{ marginTop: 6 }}
              >
                Teaching Staff
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

              <span className="minorTag">Mishank Goyal</span>
              <span
                className={styles.lightFont + "  minorTagunder"}
                style={{ marginTop: 6 }}
              >
                Teaching Staff
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
                Teaching Staff
              </span>
            </Fade>
          </div>
        </div>
      </div>
      <div className={styles.flexContainer3}>
        <div className={styles.innerContainer}>
          <p
            className={" minorPara"}
            style={{
              textAlign: "left",
            }}
          >
            On our 5-year anniversary, 15th August 2020: Gayatri Institute
            launched Pathshala. The Importance of Education is no secret. That
            education has the power to change a life, is the greatest truth of
            it all. Education is the single biggest platform that gives us a
            chance to make a place for us in this society, make a name for
            ourselves, challenge the definitions of success, push ourselves, be
            better, serve better and be proudly independent. In any way,
            education protecst a person both financially and also help them to
            live their life on their own feet. Pathshala, is an educational
            programme launched by TEAM GAYATRI as a helping hand to those
            students who have a willingness to learn but not all the resources
            to support them all the way through.
          </p>
        </div>
        <div className={styles.imgContainer1}>
          <Image src={img} alt={"image"} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
