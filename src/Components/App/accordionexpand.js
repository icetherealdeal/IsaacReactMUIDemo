import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Fun Fact 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Mayonnaise is not an instrument. Horseradish is not an instrument either.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Fun Fact 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vietnamese has many loanwords from French and Chinese.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
