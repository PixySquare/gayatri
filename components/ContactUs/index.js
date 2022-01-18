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
        <LocationCard
          address={
            " D-233B Nawada Housing Complex, Near Delight public school "
          }
          address2={"(Nawada Housing Branch)"}
          number={"9876543210"}
        />
        <LocationCard
          address={"A-66 Vipin Garden, near fakkad Baba Mandir. "}
          address2={"(Vipin Garden Branch)"}
          number={"9876543210"}
        />
        <LocationCard
          address={" G-9, Gurudwara road, Kiran Garden, matiyala road."}
          address2={"(Kiran Garden Branch)"}
          number={"9876543210"}
        />
        <LocationCard
          address={" B-1/50, Durga mandir road, sewak Park. "}
          address2={"(Sewak Park Branch)"}
          number={"9876543210"}
        />
        <LocationCard
          address={"Sheesa Godown Road, Rama park"}
          address2={"(Rama Park Branch)"}
          number={"9876543210"}
        />
      </div>
    </div>
  );
}

export default ContactUs;
