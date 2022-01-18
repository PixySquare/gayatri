import styles from "./styles.module.css";
import LocationCard from "../LocationCard";

function ContactUs() {
  return (
    <div className={styles.wrapper} id="sw">
      <div
        style={{
          textAlign: "center",
          fontFamily: "chalkie2",
          color: "#5c57a6",
          fontWeight: "600",
        }}
        className="headings"
      >
        Locations
      </div>
      <div className={styles.flexDiv}>
        <LocationCard
          address={
            " D-233B Nawada Housing Complex, Near Delight public school "
          }
          address2={"(Nawada Housing Branch)"}
          number={"8368471403"}
        />
        <LocationCard
          address={"A-66 Vipin Garden, near fakkad Baba Mandir. "}
          address2={"(Vipin Garden Branch)"}
          number={"011-41670800"}
        />
        <LocationCard
          address={" G-9, Gurudwara road, Kiran Garden, matiyala road."}
          address2={"(Kiran Garden Branch)"}
          number={"011-41670802"}
        />
        <LocationCard
          address={" B-1/50, Durga mandir road, sewak Park. "}
          address2={"(Sewak Park Branch)"}
          number={"7678462702"}
        />
        <LocationCard
          address={"Sheesa Godown Road, Rama park"}
          address2={"(Rama Park Branch)"}
          number={"9773658778"}
        />
      </div>
    </div>
  );
}

export default ContactUs;
