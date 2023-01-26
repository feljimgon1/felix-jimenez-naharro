import React from 'react';
import CuentaPerdidasGananciasTable from '../../../components/tables/cuenta-perdidas-ganancias/CuentaPerdidasGananciasTable';
import './CuentaPerdidasGanancias.scss';

export default function CuentaPerdidasGanancias() {
  return (
    <div className='cuenta-perdidas-ganancias-container'>
      <div className="cuenta-perdidas-ganancias-title">Cuenta de pérdidas y ganancias</div>
      <div className="cuenta-perdidas-ganancias-table">
        <CuentaPerdidasGananciasTable/>
      </div>
    </div>
  )
}
