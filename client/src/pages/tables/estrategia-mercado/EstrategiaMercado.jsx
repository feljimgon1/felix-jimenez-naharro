import React from 'react'
import './EstrategiaMercado.scss'
import EstrategiaMercadoTable from '../../../components/tables/estrategia-mercado/EstrategiaMercadoTable'

export default function EstrategiaMercado() {

  return (
    <div className='estrategia-mercado-container'>
      <div className="estrategia-mercado-title">Estrategia de mercado</div>
      <div className="estrategia-mercado-table">
        <EstrategiaMercadoTable/>
      </div>
    </div>
  )
}
