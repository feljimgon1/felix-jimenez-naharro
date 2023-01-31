import React from 'react'
import './PoliticaInversion.scss'
import ActionsTable from '../../../components/actions/tables/ActionsTable';
import PrevisionalTable from '../../../components/tables/previsional/PrevisionalTable';
import { politicaInversionData as rows, status } from '../../../data/politica-inversion/POLITICA_INVERSION_DATA';
import PoliticaInversionForm from '../../../components/modals/politica-inversion/PoliticaInversionForm';

export default function PoliticaInversion() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='politica-inversion-container'>
      <div className="politica-inversion-title">Política de inversión</div>
      <div className="politica-inversion-table">
        <PoliticaInversionForm open={open} setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <PrevisionalTable rows={rows} status={status}></PrevisionalTable>
      </div>
    </div>
  )
}
