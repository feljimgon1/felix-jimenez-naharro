import React from 'react'
import './Results.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { politicaFinanciacionData as rows, status } from '../../../data/politica-financiacion/POLITICA_FINANCIACION_DATA';
import PrevisionalTable from '../../../components/tables/previsional/PrevisionalTable';

export default function Results() {

  return (
    <div className='results-container'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordion-title'>Balances previsionales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PrevisionalTable className='result-table' rows={rows} status={status}></PrevisionalTable>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordion-title'>Cuenta de pérdidas y ganancias previsionales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PrevisionalTable className='result-table' rows={rows} status={status}></PrevisionalTable>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
