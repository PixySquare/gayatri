import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import CarouselCover from "../components/CarouselCover";
import AboutUs from "../components/AboutUs";
import AcademicsComponent from "../components/AcademicsComponent";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HistorySection from "../components/HistorySection";
import IntroComponent from "../components/IntroComponent";
import TeamComponent from "../components/TeamComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselCover />
      <IntroComponent />
      <AboutUs />
      <HistorySection />
      <HistorySection />
      <AcademicsComponent />
      <TeamComponent />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}
