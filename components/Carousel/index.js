import React from "react";
// import styles from './styles.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
// import { B1, B2, B3 } from "../../data";
import img from "../../public/assets/images/default.png";

import PropTypes from "prop-types";

function index(props) {
  const height = props.height;
  const width = props.width;
  return (
    <div className="carousel-wrapper" style={{ marginTop: 80 }}>
      <Carousel
        infiniteLoop={true}
        interval={3000}
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        stopOnHover={true}
        centerMode={true}
        showArrows={true}
        emulateTouch={true}
        swipable={true}
      >
        <div>
          <Image
            src={img}
            style={{ width: "20%" }}
            height={height}
            width={width}
            alt="legend 1"
          />
        </div>
        <div>
          <Image
            src={img}
            style={{ width: "20%" }}
            height={height}
            width={width}
            alt="legend 2"
          />
        </div>
        <div>
          <Image
            src={img}
            style={{ width: "20%" }}
            height={height}
            width={width}
            alt="legend 2"
          />
        </div>
      </Carousel>
    </div>
  );
}

index.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default index;
