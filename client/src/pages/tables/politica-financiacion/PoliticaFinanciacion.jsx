import React from 'react'
import './PoliticaFinanciacion.scss';
import ActionsTable from '../../../components/actions/ActionsTable';
import PrevisionalTable from '../../../components/tables/previsional/PrevisionalTable';
import PoliticaFinanciacionForm from '../../../components/modals/politica-financiacion/PoliticaFinanciacionForm';
import { politicaFinanciacionData as rows, status } from '../../../data/politica-financiacion/POLITICA_FINANCIACION_DATA';

export default function PoliticaFinanciacion() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div className='politica-financiacion-container'>
      <div className="politica-financiacion-title">Política de financiación</div>
      <div className="politica-financiacion-table">
        <PoliticaFinanciacionForm open={open} setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <PrevisionalTable rows={rows} status={status}></PrevisionalTable>
      </div>
    </div>
  )
}
