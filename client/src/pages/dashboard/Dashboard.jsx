import React from 'react';
import './Dashboard.scss'
import { BalanceChart } from '../../components/charts/balance/BalanceChart';
import { CuentaPerdidasGananciasChart } from '../../components/charts/cuenta-perdidas-ganancias/CuentaPerdidasGananciasChart';

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='situation'>
        <BalanceChart />
      </div>
      <div className='previsional'>

      </div>
    </div>
  )
}
