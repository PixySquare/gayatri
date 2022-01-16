import styles from "./styles.module.css";
function LocationCard(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.8071986825257!2d77.2708664!3d28.5455143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1640326742896!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ borderRadius: "10px"}}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p> Address: {props.address} </p>
        <p> Phone : {props.number} </p>
      </div>
    </div>
  );
}

export default LocationCard;
