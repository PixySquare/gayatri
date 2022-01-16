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
            fontSize: "48px",
            color: "white",
            marginBottom: 10,
          }}
        >
          Timeline
        </h1>
        <Image
          src="/assets/underlines/2.png"
          width="200"
          height="20"
          className={styles.imgLine}
          alt="gayatri "
        />
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h2>2017</h2>
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
              <h2>2016</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2015</h2>
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
              <h2>2012</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
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
