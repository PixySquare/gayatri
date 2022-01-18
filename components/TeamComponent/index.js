import styles from "./styles.module.css";
import CardComponent from "../CardComponent";
import Pc1 from "../../public/assets/achivements/1.jpeg";
import Pc2 from "../../public/assets/achivements/2.jpeg";
import Pc3 from "../../public/assets/achivements/3.jpeg";

import Pc4 from "../../public/assets/achivements/4.jpeg";
import Pc5 from "../../public/assets/achivements/5.jpeg";
import Pc6 from "../../public/assets/achivements/6.jpeg";

function TeamComponent() {
  return (
    <div className={styles.wrapper}>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas.{" "}
      </p> */}
      <div className={styles.flexDiv}>
        <CardComponent name={"Pankaj jha"} class={"1"} srcc={Pc1} />
        <CardComponent name={"Pankaj jha"} class={"1"} srcc={Pc2} />
        <CardComponent name={"Pankaj jha"} class={"1"} srcc={Pc3} />
      </div>
      <div className={styles.flexDiv}>
        <CardComponent name={"Pankaj jha"} class={"1"} srcc={Pc4} />
        <CardComponent name={"Pankaj jha"} class={"1"} srcc={Pc5} />
        <CardComponent name={"Pankaj jha"} class={"1"} srcc={Pc6} />
      </div>
    </div>
  );
}

export default TeamComponent;
