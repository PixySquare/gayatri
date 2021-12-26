import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
import Image from "next/image";
function Gallery() {
  return (
    <div className={styles.wrapper} id="gallery">
      <div className={styles.firstRow}>
        <Image src={img} />
        <div className={styles.innerFirstRow}>
          <div className={styles.innerTop}>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
          </div>
          <div className={styles.innerTop}>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.middleImages}>
          <Image src={img} />
        </div>
        <div className={styles.middleImages} style={{ marginLeft: 5 }}>
          <Image src={img} />
        </div>
        <div className={styles.innerSecondRow}>
          <div className={styles.innerTop}>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
          </div>
          <div className={styles.innerTop}>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
            <div style={{ margin: 5 }}>
              <Image src={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
