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
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2696002053904!2d77.02494041548708!3d28.621680891321827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c974b4da23%3A0xe313a9a0f9c20c3b!2sGAYATRI%20INSTITUTE!5e0!3m2!1sen!2sin!4v1643033995973!5m2!1sen!2sin"
          }
          address={
            " D-233B Nawada Housing Complex, Near Delight public school "
          }
          address2={"(Nawada Housing Branch)"}
          number={"8368471403"}
        />
        <LocationCard
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2696002053904!2d77.02494041548708!3d28.621680891321827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c974b4da23%3A0xe313a9a0f9c20c3b!2sGAYATRI%20INSTITUTE!5e0!3m2!1sen!2sin!4v1643034538812!5m2!1sen!2sin"
          }
          address={"A-66 Vipin Garden, near fakkad Baba Mandir. "}
          address2={"(Vipin Garden Branch)"}
          number={"011-41670800"}
        />
        <LocationCard
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.364840275317!2d77.04557811548707!3d28.61882559145115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05c53d5771f3%3A0xddc664dbde4fb092!2sGayatri%20Institute!5e0!3m2!1sen!2sin!4v1643034253959!5m2!1sen!2sin"
          }
          address={" G-9, Gurudwara road, Kiran Garden, matiyala road."}
          address2={"(Kiran Garden Branch)"}
          number={"011-41670802"}
        />
        <LocationCard
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3201516075524!2d77.03251801548704!3d28.620165391390575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05da239131c7%3A0xe57f938fa3a7394b!2sGayatri%20Institute!5e0!3m2!1sen!2sin!4v1643034825238!5m2!1sen!2sin"
          }
          address={"WZA 37-40, 1st Floor, Dwarka Mor, Mt Pillar-771"}
          address2={"(Shisha Godam Road Branch)"}
          number={"7678462702"}
        />
        <LocationCard
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6620622318032!2d77.05162991548688!3d28.60991319185438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05b3bcad66cd%3A0xaf647d3fc6d3ad0e!2sGAYATRI%20INSTITUTE!5e0!3m2!1sen!2sin!4v1643034684981!5m2!1sen!2sin"
          }
          address={"Rz-41B Jain Colony pt-3, Shani Bazar Road, Uttam Nagar"}
          address2={"(Jain Colony Branch)"}
          number={"9773658778"}
        />
      </div>
    </div>
  );
}

export default ContactUs;
