import React, { useEffect, useState } from 'react'
import './Results.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { politicaFinanciacionData as rows, status } from '../../../data/politica-financiacion/POLITICA_FINANCIACION_DATA';
import PrevisionalTable from '../../../components/tables/previsional/PrevisionalTable';
import { FaRegFilePdf } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa";

export default function Results() {

  const [count, setCount] = useState(0);

  return (
    <div className='results-container'>
      <div className='result-tables-container'>
        <div className="main-tables">
          <div className='accordion-title'>Resultados principales</div>
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
        <div className="resultados-auxiliares">
          <div className='accordion-title'>Resultados auxiliares</div>
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
      </div>
      <div className="inner-test">
        <div className="test"><div className="docs-generator-title">Generación de documentos</div>
          <div className="content">
            <FaRegFilePdf className='icon icon-pdf' style={{ color: '#AD0B00' }} />
            <FaRegFileExcel className='icon icon-pdf' style={{ color: '#037543' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
