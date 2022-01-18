import Image from "next/image";
import styles from "./styles.module.css";
import img from "../../public/assets/images/default.png";
import { Fade } from "react-awesome-reveal";

function CardComponent(props) {
  return (
    <div className={styles.wrapper}>
      <Fade>
        <Image src={props.srcc} alt={"gayatri "} />
      </Fade>

      {/* <div className={styles.info}>
        <div style={{ marginBottom: 6 }} className="minorTag">
          {props.name}
        </div>
        <div style={{ margin: 0 }} className="minorTagunder">
          {props.class}
        </div>
         <p styles={{ fontFamily: "poppins", margin: 0, fontSize: "3rem" }}>
          Lorem ipsum dolor{" "}
        </p>
      </div>  */}
    </div>
  );
}

export default CardComponent;
