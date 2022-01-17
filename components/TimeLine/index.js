import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.css";
import Image from "next/image";

import { useEffect } from "react";
export default function TimeLine() {
  return (
    <>
      <h1
        className=" onMobile headings"
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: 10,
          fontFamily: "chalkie2",
          color: "#3ebb87",
        }}
      >
        Our Journey
      </h1>
      <div className={styles.container} id="Timeline">
        <div className={styles.innerContainer}>
          <h1
            className=" onDesktop headings"
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: 10,
              fontFamily: "chalkie2",
              color: "#3ebb87",
            }}
          >
            Our Journey
          </h1>
          {/* <Image
      src="/assets/underlines/2.png"
      width="200"
      height="20"
      className={styles.imgLine}
      alt="gayatri "
    /> */}
          <div className="timeline" data-aos="fade-up">
            <br />

            <Fade>
              <div className="container right">
                <div className="content">
                  <h1
                    style={{ fontFamily: "poppins", marginBottom: 0 }}
                    className=" lolhead"
                  >
                    2015
                  </h1>
                  <p style={{ fontFamily: "poppins" }} className=" lolpara">
                    The first Branch of Gayatri Institute opens in our own home,
                    thanks to the hardwork and tireless efforts of our founder,
                    Mr. Shubham Dubey.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="container left">
                <div className="content">
                  <h1
                    style={{ fontFamily: "poppins", marginBottom: 0 }}
                    className=" lolhead"
                  >
                    2017
                  </h1>
                  <p style={{ fontFamily: "poppins" }} className=" lolpara">
                    The second branch of Gayatri Institute and our dream
                    Institute centre opens up in Nawada Housing Complex as we
                    expand for the first time, spreading our wings further into
                    the horizon.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="container right">
                <div className="content">
                  <h1
                    className=" lolhead"
                    style={{ fontFamily: "poppins", marginBottom: 0 }}
                  >
                    2019
                  </h1>
                  <p style={{ fontFamily: "poppins" }} className=" lolpara">
                    We partner up with another like-minded individual, as
                    Gayatri Institute tests new but faithful waters in opening
                    up a franchise in Kiran Garden, with Mr. Prateek Goyal.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="container left">
                <div className="content">
                  <h1
                    className=" lolhead"
                    style={{ fontFamily: "poppins ", marginBottom: 0 }}
                  >
                    2020
                  </h1>
                  <p style={{ fontFamily: "poppins" }} className=" lolpara">
                    Another one of our Centre&apos;s branch open up in Dwarka
                    Mor, under the careful and valuable supervision of our
                    founder Mr, Shubham Dubey
                  </p>
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="container right">
                <div className="content">
                  <h1
                    className=" lolhead"
                    style={{ fontFamily: "poppins", marginBottom: 0 }}
                  >
                    2021
                  </h1>
                  <p style={{ fontFamily: "poppins" }} className=" lolpara">
                    We partner up with another like-minded individual, as
                    Gayatri Institute opens up our newest franchise in Jain
                    Colony Dwarka, with Mr. Mishank Goyal.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
