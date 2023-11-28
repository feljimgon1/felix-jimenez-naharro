import React from 'react';
import './Dashboard.scss'
import { BalanceChart } from '../../components/charts/balance/BalanceChart';
import { EstrategiaMercadoChart } from '../../components/charts/estrategia-mercado/EstrategiaMercadoChart';
import { PoliticaInversionChart } from '../../components/charts/politica-inversion/PoliticaInversionChart';

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className="title">Dashboard</div>
      <div className='situation-container'>
        <div className="chart-container">
          <div className="chart-title">Balance</div>
          <div className="chart">
            <BalanceChart />
          </div>
        </div>
      </div>
      <div className='previsional-container'>
        <div className="chart-container">
          <div className="chart-title">Estrategia de mercado</div>
          <div className="chart">
            <EstrategiaMercadoChart />
          </div>
          <div></div>
        </div>
        <div className="chart-container">
          <div className="chart-title">Política de inversión</div>
          <div className="chart">
            <PoliticaInversionChart />
          </div>
        </div>
      </div>
    </div>
  )
}
