import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Accordian({ title, description }) {
  return (
    <div>
      <Accordion
        style={{
          boxShadow: "none !important",
          backgroundColor: "#ffff0000 !important",
          borderBottom: "1px solid #333 !important",
          // borderTop: "1px solid #3333 !important",
          borderRadius: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left" }}>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Accordian;
