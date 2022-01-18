import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import srcc from "../../public/assets/maps.svg";
import { Fade } from "react-awesome-reveal";

function LocationCard(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.map}>
        <div className="onDesktop">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.8071986825257!2d77.2708664!3d28.5455143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIndraprastha%20Institute%20of%20Information%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1640326742896!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <Fade>
          <div className="lol_flex">
            <div>
              <div className="minorTag2"> {props.address2} </div>
              <div className="minorTag2"> {props.address} </div>
              <div className="minorTagunder"> Phone : {props.number} </div>
            </div>
            <div className="lol_flex2 onMobile">
              <Link href="/">
                <a>
                  <Image
                    src={srcc}
                    alt="Picture of the author"
                    height="50"
                    width="50"
                  />
                </a>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default LocationCard;
