import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <span styles={{ fontFamily: "poppins" }}> Follow us:</span>
        <div className={styles.links}>
          <Link href={"https://www.instagram.com"}>
            <a target="_blank" className={styles.nav_item}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{
                  fontFamily: "poppins",
                  marginLeft: 10,
                  marginRight: 10,
                }}
              />
            </a>
          </Link>
          <Link href={"https://www.facebook.com"}>
            <a target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ marginRight: 10 }}
              />
            </a>
          </Link>
          <Link href={"https://www.whatsapp.com"}>
            <a target="_blank" className={styles.nav_item}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="lg"
                style={{ marginRight: 10 }}
              />
            </a>
          </Link>
        </div>
      </div>
      <hr style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }} />
      <br />
      <div className={styles.wrapper}>
        <span styles={{ fontFamily: "poppins" }}>Gayatri Institute </span>
        <span styles={{ fontFamily: "poppins" }}>
          @ Gayatri Institute, 2021
        </span>
      </div>
      <br />
    </div>
  );
}

export default Footer;
