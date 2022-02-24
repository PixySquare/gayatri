/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Gallery.module.css";
import { Fade } from "react-awesome-reveal";
import React, { useEffect } from "react";

import Footer from "../components/Footer";
import g1 from "../public/assets/gallery/1.png";
import g2 from "../public/assets/gallery/2.png";
import g3 from "../public/assets/gallery/3.png";
import g4 from "../public/assets/gallery/4.png";
import g5 from "../public/assets/gallery/5.png";
import g6 from "../public/assets/gallery/6.png";
import g7 from "../public/assets/gallery/7.png";
import g8 from "../public/assets/gallery/8.png";
import g9 from "../public/assets/gallery/9.png";
import g10 from "../public/assets/gallery/10.png";
import g11 from "../public/assets/gallery/11.png";
import g12 from "../public/assets/gallery/12.png";
import g13 from "../public/assets/gallery/13.png";
import g14 from "../public/assets/gallery/14.png";
import g15 from "../public/assets/gallery/15.png";
import g16 from "../public/assets/gallery/16.png";
import g17 from "../public/assets/gallery/17.png";
import g18 from "../public/assets/gallery/18.png";
import g19 from "../public/assets/gallery/19.png";
import g20 from "../public/assets/gallery/20.png";
import g21 from "../public/assets/gallery/21.png";
import g22 from "../public/assets/gallery/22.png";
import g23 from "../public/assets/gallery/23.png";
import g24 from "../public/assets/gallery/24.png";
import g25 from "../public/assets/gallery/25.png";
import g26 from "../public/assets/gallery/26.png";
import Head from "next/head"
function Menu() {
  
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
    <Head>
  <title>Gallery</title>
  <meta name="description" content="Here at Gayatri Institute, we strive towards providing our students with the best teaching services, an enthusiastic and well qualified
faculty along with affordable fees. Our focus upon building Strong
conceptual understanding of topics among students helps us achieve
our desired results; not only excellent marksheets, but smart
individuals with an aptitude and appetite for grasping a wide range
of concepts. While our Primary focus is on fundamental classes i.e
I-VIII, we also have well structured tutoring services for higher
classes i.e. IX-XII" />

</Head>
      <Header />
      <div className={styles.cover}>
        <div className={styles.heading}>Our Achievements and Success</div>
      </div>
      <br />
      <br />
      <br />

      <div className={styles.row}>
        <div className={styles.column}>
          <Fade>
            <Image
              alt={
                "Gayatri offers discipline"
              }
              src={g1}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Personalised & Specialized teachers"
              }
              src={g2}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Experienced Teachers"
              }
              src={g3}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Educational Skills"
              }
              src={g4}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Gayatri offers values morals discipline to students"
              }
              src={g5}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Gayatri provides School"
              }
              src={g6}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "DPP sheets Assignments "
              }
              src={g7}
              style={{ width: "100%" }}
            />
          </Fade>{" "}
          <Fade>
            <Image
              alt={
                "Blackboard Whiteboard SmartClass Chalk"
              }
              src={g8}
              style={{ width: "100%" }}
            />
          </Fade>
        </div>
        <div className={styles.column}>
          <Fade>
            <Image
              alt={
                "Notebook Register Students"
              }
              src={g9}
              style={{ width: "100%" }}
            />
          </Fade>

          <Fade>
            <Image
              alt={
                "Google Meet Zoom Video Classes"
              }
              src={g11}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "All India Rank IIT NIT AIIMS"
              }
              src={g12}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Best Colleges"
              }
              src={g13}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Educational Environment Classes"
              }
              src={g14}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Prestigious Education in India"
              }
              src={g15}
              style={{ width: "100%" }}
            />
          </Fade>
        </div>
        <div className={styles.column}>
          <Fade>
            <Image
              alt={
                "Good Administrator Coordinator"
              }
              src={g16}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Best Educational Platform"
              }
              src={g17}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Online Coaching"
              }
              src={g18}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Physics Chemistry Maths History Geography"
              }
              src={g19}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "English MCQ Subjective"
              }
              src={g20}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Topper Notes Guidance"
              }
              src={g10}
              style={{ width: "100%" }}
            />
          </Fade>
        </div>
        <div className={styles.column}>
          <Fade>
            <Image
              alt={
                "Patshala Booklet"
              }
              src={g21}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Question and Answers"
              }
              src={g22}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Tutorials Assignments Labs Plagiarism"
              }
              src={g23}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Academics General Knowledge"
              }
              src={g24}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Past Year Questions"
              }
              src={g25}
              style={{ width: "100%" }}
            />
          </Fade>
          <Fade>
            <Image
              alt={
                "Time Management Stationary"
              }
              src={g26}
              style={{ width: "100%" }}
            />
          </Fade>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Menu;
