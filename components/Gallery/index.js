import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../public/assets/images/default.png";
import Image from "next/image";
import Link from "next/link";
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
          className="headings"
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
        <div className=" onDesktop">
          <div className={styles.gallery}>
            <figure className="gallery__item gallery__item--1">
              <Image src={img} alt="Gallery image 1" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--2">
              <Image src={img} alt="Gallery image 2" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--3">
              <Image src={img} alt="Gallery image 3" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--4">
              <Image src={img} alt="Gallery image 4" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--5">
              <Image src={img} alt="Gallery image 5" className="gallery__img" />
            </figure>
            <figure className="gallery__item gallery__item--6">
              <Image
                src={img}
                alt="Gallery image 6"
                className="gallery__img "
              />
            </figure>
          </div>
        </div>
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
            <div>
              <Image
                src={img}
                alt="Gallery image 6"
                className="gallery__img last_image"
              />
            </div>
            <div>
              <Image
                src={img}
                alt="Gallery image 6"
                className="gallery__img last_image"
              />
            </div>
            <div>
              <Image
                src={img}
                alt="Gallery image 6"
                className="gallery__img last_image"
              />
            </div>
            <div>
              <Image
                src={img}
                alt="Gallery image 6"
                className="gallery__img last_image"
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
      </div>
    </div>
  );
}

export default Gallery;
