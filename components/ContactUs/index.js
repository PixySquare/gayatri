import styles from "./styles.module.css";
import LocationCard from "../LocationCard";

function ContactUs() {
  return (
    <div className={styles.wrapper} id="sw">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "chalkie2",
          color: "#5c57a6",
        }}
        className="headings"
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
