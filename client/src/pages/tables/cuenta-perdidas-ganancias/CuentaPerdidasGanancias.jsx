import React from 'react';
import ActionsTable from '../../../components/actions/ActionsTable';
import CuentaPerdidasGananciasForm from '../../../components/modals/cuenta-perdidas-ganancias/CuentaPerdidasGananciasForm';
import SituationTable from '../../../components/tables/situacion/SituationTable';
import './CuentaPerdidasGanancias.scss';
import { cuentaPerdidasGanancias as rows } from '../../../data/cuenta-perdidas-ganancias/CUENTA_PERDIDAS_GANANCIAS_DATA';

export default function CuentaPerdidasGanancias() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='cuenta-perdidas-ganancias-container'>
      <div className="cuenta-perdidas-ganancias-title">Cuenta de pérdidas y ganancias</div>
      <div className="cuenta-perdidas-ganancias-table">
        <CuentaPerdidasGananciasForm open={open} setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <SituationTable data={rows}></SituationTable>
      </div>
    </div>
  )
}
