import styles from "./styles.module.css";
import CardComponent from "../CardComponent";
function TeamComponent() {
  return (
    <div className={styles.wrapper}>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla urna
        porttitor rhoncus dolor. Ornare lectus sit amet est placerat in egestas.{" "}
      </p> */}
      <div className={styles.flexDiv}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
      <div className={styles.flexDiv}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default TeamComponent;
