import React from 'react';
import './EstrategiaCirculante.scss';
import EstrategiaCirculanteForm from '../../../components/modals/estrategia-circulante/EstrategiaCirculanteForm';
import ActionsTable from '../../../components/actions/ActionsTable';
import PrevisionalTable from '../../../components/tables/previsional/PrevisionalTable';
import { estrategiaCirculanteData as rows, status } from '../../../data/estrategia-circulante/ESTRATEGIA_CIRCULANTE_DATA';

export default function EstrategiaCirculante() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='estrategia-circulante-container'>
      <div className="estrategia-circulante-title">Estrategia de circulante</div>
      <div className="estrategia-circulante-table">
        <EstrategiaCirculanteForm open={open} setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <PrevisionalTable rows={rows} status={status}></PrevisionalTable>
      </div>
    </div>
  )
}
