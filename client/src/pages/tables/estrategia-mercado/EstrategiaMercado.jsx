import React from 'react'
import './EstrategiaMercado.scss'
import EstrategiaMercadoForm from '../../../components/modals/estrategia-mercado/EstrategiaMercadoForm'
import ActionsTable from '../../../components/actions/tables/ActionsTable';
import PrevisionalTable from '../../../components/tables/previsional/PrevisionalTable';
import { estrategiaMercadoData as rows, status } from '../../../data/estrategia-mercado/ESTRATEGIA_MERCADO_DATA';

export default function EstrategiaMercado() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='estrategia-mercado-container'>
      <div className="estrategia-mercado-title">Estrategia de mercado</div>
      <div className="estrategia-mercado-table">
        <EstrategiaMercadoForm open={open} setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <PrevisionalTable rows={rows} status={status}></PrevisionalTable>
      </div>
    </div>
  )
}
