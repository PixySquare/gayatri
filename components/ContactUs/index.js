import styles from "./styles.module.css";
import LocationCard from "../LocationCard";

function ContactUs() {
  return (
    <div className={styles.wrapper} id="contact">
      <h1 style={{ textAlign: "left" }}>Locations</h1>
      <div className={styles.flexDiv}>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />

      </div>
    </div>
  );
}

export default ContactUs;
