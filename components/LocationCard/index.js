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
            src={props.src}
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
                    alt="1st to 12th Class All Subjects"
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
