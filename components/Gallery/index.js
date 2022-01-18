import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../public/assets/images/default.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

import g1 from "../../public/assets/gallery/7.png";
import g2 from "../../public/assets/gallery/21.png";
import g3 from "../../public/assets/gallery/22.png";
import g4 from "../../public/assets/gallery/5.png";
import g5 from "../../public/assets/gallery/17.png";
import g6 from "../../public/assets/gallery/3.png";

function Gallery() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.container} id="gallery">
      <div className={styles.innerContainer}>
        <h1
          className="headings2"
          style={{
            color: "#fff",
            marginTop: 0,
            marginBottom: 30,
            textAlign: "center",
            fontFamily: "chalkie2",
            color: "#aec336",
          }}
        >
          Gallery
        </h1>
        <Fade>
          <div className=" onDesktop">
            <div className={styles.gallery}>
              <figure className="gallery__item gallery__item--1">
                <Image
                  alt={
                    "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                  }
                  src={g1}
                  style={{ width: "100%" }}
                />
              </figure>
              <figure className="gallery__item gallery__item--2">
                <Image
                  alt={
                    "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                  }
                  src={g2}
                  style={{ width: "100%" }}
                />
              </figure>
              <figure className="gallery__item gallery__item--3">
                <Image
                  alt={
                    "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                  }
                  src={g3}
                  style={{ width: "100%" }}
                />
              </figure>
              <figure className="gallery__item gallery__item--4">
                <Image
                  alt={
                    "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                  }
                  src={g4}
                  style={{ width: "100%" }}
                />
              </figure>
              <figure className="gallery__item gallery__item--5">
                <Image
                  alt={
                    "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                  }
                  src={g5}
                  style={{ width: "100%" }}
                />
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  alt={
                    "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                  }
                  src={g6}
                  style={{ width: "100%" }}
                />
              </figure>
            </div>
          </div>
        </Fade>
        <div className="onMobile">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div styles={{ margin: 3 }}>
              <Image
                alt={
                  "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                }
                src={g3}
                style={{ width: "100%" }}
              />
            </div>
            <div styles={{ margin: 3 }}>
              <Image
                alt={
                  "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                }
                src={g2}
                style={{ width: "100%" }}
              />
            </div>
            <div styles={{ margin: 3 }}>
              <Image
                alt={
                  "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                }
                src={g1}
                style={{ width: "100%" }}
              />
            </div>
            <div styles={{ margin: 3 }}>
              <Image
                alt={
                  "Gayatri eats food roziroti dwarka photo check out restaraunt now  www.gayatrieats.com "
                }
                src={g4}
                style={{ width: "100%" }}
              />
            </div>
          </Carousel>
        </div>
        <div
          styles={{
            fontFamily: "poppins",
          }}
          className="gaaa"
        >
          <Link href="/gallery">Explore more -&gt;</Link>
        </div>
        <br className="onMobile" />
        <br className="onMobile" />
        <br className="onMobile" />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Gallery;
