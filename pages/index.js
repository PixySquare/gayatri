import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import React, { useEffect } from "react";

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

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    // if (window.pageYOffset > 0) {
    //   const about = window.getElementById("aboutus");
    //   about.add(" colorHeader");
    // }
    console.log("scroll");
  };

  return (
    <div>
      <Header />
      {/* <CarouselCover /> */}
      <IntroComponent />
      <br />
      <br />
      <br />

      <AboutUs />
      {/* <HistorySection /> */}
      {/* <VisionSection /> */}
      {/* <FounderSection /> */}
      <TimeLine />
      <AcademicsComponent />
      <TeamComponent />
      <Gallery />
      <ContactUs />
      <Form />
      <Footer />
    </div>
  );
}
