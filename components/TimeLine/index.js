import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styles from "./styles.module.css";
import Image from "next/image";

export default function TimeLine() {
  return (
    <div className={styles.container} id="Timeline">
      <div className={styles.innerContainer}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "108px",
            color: "white",
            marginBottom: 10,
            fontFamily: "chalkie2",
            color: "#3ebb87",
          }}
        >
          TIMELINE
        </h1>
        {/* <Image
          src="/assets/underlines/2.png"
          width="200"
          height="20"
          className={styles.imgLine}
          alt="gayatri "
        /> */}
        <div className="timeline">
          <div className="container right">
            <div className="content">
              <h1 style={{ fontFamily: "poppins" }}>2015</h1>
              <p style={{ fontFamily: "poppins" }}>
                The first Branch of Gayatri Institute opens in our own home,
                thanks to the hardwork and tireless efforts of our founder, Mr.
                Shubham Dubey.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h1 style={{ fontFamily: "poppins" }}>2017</h1>
              <p style={{ fontFamily: "poppins" }}>
                The second branch of Gayatri Institute and our dream Institute
                centre opens up in Nawada Housing Complex as we expand for the
                first time, spreading our wings further into the horizon.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h1 style={{ fontFamily: "poppins" }}>2019</h1>
              <p style={{ fontFamily: "poppins" }}>
                We partner up with another like-minded individual, as Gayatri
                Institute tests new but faithful waters in opening up a
                franchise in Kiran Garden, with Mr. Prateek Goyal.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h1 style={{ fontFamily: "poppins" }}>2020</h1>
              <p style={{ fontFamily: "poppins" }}>
                Another one of our Centre&apos;s branch open up in Dwarka Mor,
                under the careful and valuable supervision of our founder Mr,
                Shubham Dubey
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h1 style={{ fontFamily: "poppins" }}>2021</h1>
              <p style={{ fontFamily: "poppins" }}>
                We partner up with another like-minded individual, as Gayatri
                Institute opens up our newest franchise in Jain Colony Dwarka,
                with Mr. Mishank Goyal.
              </p>
            </div>
          </div>
          {/* <div className="container left">
            <div className="content">
              <h2>2011</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>2007</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
