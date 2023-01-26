import React from 'react'
import './Balance.scss'
import BalanceTable from '../../../components/tables/balance/BalanceTable'

export default function Balance() {
  return (
    <div className='balance-container'>
      <div className="balance-title">Balance</div>
      <div className="balance-table">
        <BalanceTable/>
      </div>
    </div>
  )
}
