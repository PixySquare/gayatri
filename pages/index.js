import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import CarouselCover from "../components/CarouselCover";
import AboutUs from "../components/AboutUs";
import AcademicsComponent from "../components/AcademicsComponent";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HistorySection from "../components/HistorySection";
import VisionSection from "../components/VisionSection";

import IntroComponent from "../components/IntroComponent";
import TeamComponent from "../components/TeamComponent";
import styles from "../styles/Home.module.css";
import FounderSection from "../components/FounderSection";
import Form from "../components/Form";
import TimeLine from "../components/TimeLine";
import { Window } from "@mui/icons-material";
import Link from "next/link";
export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      console.log("scroll");
      const header = document.getElementById("header");
      header.classList.add("colorHeader");

      // const about = window.getElementById("aboutus");
      // about.add(" colorHeader");
    } else if (window.pageYOffset === 0) {
      const header = document.getElementById("header");
      header.classList.remove("colorHeader");
    }
  };

  return (
    <div>
      <Header />
      {/* <CarouselCover /> */}
      <div className={styles.iconsColumn}>
        <Link
          href={
            "https://www.facebook.com/pages/category/Education/Gayatri-Institute-1024965107643250/"
          }
        >
          <a target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              style={{ color: "#006AFF" }}
            />
          </a>
        </Link>

        <Link href={"https://www.instagram.com/gayatri_institute/"}>
          <a target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "rgb(189, 105, 189)" }}
            />
          </a>
        </Link>
        <Link href={"https://api.whatsapp.com/send?phone=8368471403"}>
          <a target="_blank" className={styles.nav_item}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              style={{ color: "#25D366" }}
            />
          </a>
        </Link>
      </div>
      <IntroComponent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutUs />
      {/* <HistorySection /> */}
      {/* <VisionSection /> */}
      {/* <FounderSection /> */}
      <TimeLine />
      <br />
      <br />
      <br />
      <AcademicsComponent />
      <TeamComponent />
      <br />
      <br />
      <br />
      <Gallery />
      <ContactUs />
      <Form />
      <Footer />
    </div>
  );
}
