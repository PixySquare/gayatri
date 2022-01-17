import styles from "./styles.module.css";
import LocationCard from "../LocationCard";

function ContactUs() {
  return (
    <div className={styles.wrapper} id="sw">
      <h1
        style={{
          textAlign: "left",
          fontFamily: "chalkie2",
          fontSize: 70,
          color: "#5c57a6",
        }}
      >
        Locations
      </h1>
      <div className={styles.flexDiv}>
        <LocationCard address={"address line 1"} number={"9876543210"} />
        <LocationCard address={"address line 1"} number={"9876543210"} />
        <LocationCard address={"address line 1"} number={"9876543210"} />
        <LocationCard address={"address line 1"} number={"9876543210"} />
        <LocationCard address={"address line 1"} number={"9876543210"} />
      </div>
    </div>
  );
}

export default ContactUs;
