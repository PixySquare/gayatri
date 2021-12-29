import Image from "next/image";
import Accordian from "../Accordian";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
function AcademicsComponent() {
  return (
    <div className={styles.wrapper} id="academics">
      <h1 style={{ fontSize: 48, textAlign: "left" }}>Academics</h1>
      <div className={styles.flexDiv}>
        <div
          className={styles.text}
          style={{ textAlign: "left", width: "60%" }}
        >
          <h2 style={{ marginTop: 0 }}>Methodology</h2>
          <p className={styles.lightFont} style={{ paddingRight: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor. Ornare lectus sit amet est
            placerat in egestas. Ultricies lacus sed turpis tincidunt. In
            nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla urna porttitor rhoncus dolor. Ornare lectus sit amet est
            placerat in egestas.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Fringilla urna porttitor rhoncus dolor. Ornare
            lectus sit amet est placerat in egestas
          </p>
        </div>
        <div className={styles.imageDiv}>
          <Image src={img} />
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
