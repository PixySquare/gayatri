import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styles from "./styles.module.css";

export default function TimeLine() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>

        <h1 style={{ textAlign: "center", fontSize: "40px", color: "white" }}>Timeline</h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> We give them solid conceptual understanding to help them clearn
              their understanding of the subject, and make them fall in love with
              it!</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> We give them solid conceptual understanding to help them clearn
              their understanding of the subject, and make them fall in love with
              it!</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> We give them solid conceptual understanding to help them clearn
              their understanding of the subject, and make them fall in love with
              it!</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent> We give them solid conceptual understanding to help them clearn
              their understanding of the subject, and make them fall in love with
              it!</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
