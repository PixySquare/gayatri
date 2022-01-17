import Image from "next/image";
import Accordian from "../Accordian";
import styles from "./styles.module.css";
import img from "../../public/assets/images/intro2.png";
function AcademicsComponent() {
  return (
    <div className={styles.wrapper} id="academics">
      <h1
        style={{
          fontSize: 68,
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
          style={{ textAlign: "left", width: "50%", marginRight: "10%" }}
        >
          {/* <h2 style={{ marginTop: 0 }}>Methodology</h2> */}
          <p className={styles.lightFont} style={{ paddingRight: 30 }}>
            The basic theme in methodology of teaching in Gayatri Institute is
            the fact that we give the utmost important to the basics of concepts
            of students and how students apply those concepts, both in questions
            ranging from easy to difficult but more importantly how these
            concepts are applied in real life. Combine that with specialised
            classes from classes 1-12, and students are just continually in a
            habit of practising concepts, asking questions and following a
            routine.
          </p>
        </div>
        <div className={styles.imageDiv}>
          <Image src={img} alt="hello" />
        </div>
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
