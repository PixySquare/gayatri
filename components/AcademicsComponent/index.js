import Image from "next/image";
import Accordian from "../Accordian";
import styles from "./styles.module.css";
import img from "../../public/assets/certificate2.jpeg";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function AcademicsComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.wrapper} id="academics">
      <h1
        className="headings"
        style={{
          textAlign: "left",
          marginBottom: 10,
          marginTop: 0,

          fontFamily: "chalkie2",
          color: "#bc5287",
        }}
      >
        Academics
      </h1>
      {/* <Image src="/assets/underlines/3.png" width="200" height="20" /> */}
      <div className={styles.flexDiv}>
        <div
          className={styles.text}
          style={{
            fontFamily: "poppins",
            textAlign: "left",
            width: "100%",
          }}
        >
          {/* <h2 style={{ marginTop: 0 }}>Methodology</h2> */}
          <div
            className={styles.lightFont + " minorPara"}
            style={{ paddingRight: 30, marginTop: 34 }}
          >
            The basic theme in methodology of teaching in Gayatri Institute is
            the fact that we give the utmost important to the basics of concepts
            of students and how students apply those concepts, both in questions
            ranging from easy to difficult but more importantly how these
            concepts are applied in real life. Combine that with specialised
            classes from classes 1-12, and students are just continually in a
            habit of practising concepts, asking questions and following a
            routine.
          </div>
        </div>
        <Fade>
          <div className={styles.imageDiv}>
            <Image src={img} alt="hello" />
          </div>
        </Fade>
      </div>
      {/* <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      />
      <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      />
      <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      />
      <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      />
      <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      />
      <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      />
      <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      />
      <Accordian
        title="Class1"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas"
      /> */}
    </div>
  );
}

export default AcademicsComponent;
