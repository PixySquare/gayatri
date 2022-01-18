/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Gallery.module.css";

import Footer from "../components/Footer";
import gallery1 from "../public/assets/images/default.png";

function menu() {
  return (
    <div>
      <Header />
      <div className={styles.cover}>
        <div className={styles.heading}>Our Achievements and Success</div>
      </div>
      <br />
      <br />
      <br />

      <div className={styles.row}>
        <div className={styles.column}>
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
        </div>
        <div className={styles.column}>
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
        </div>
        <div className={styles.column}>
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
        </div>
        <div className={styles.column}>
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
          <Image
            alt={
              "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
            }
            src={gallery1}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default menu;
