import React from 'react'
import './Balance.scss'
import BalanceForm from '../../../components/modals/balance/BalanceForm';
import SituationTable from '../../../components/tables/situacion/SituationTable';
import ActionsTable from '../../../components/actions/tables/ActionsTable';
import { activos, pasivos, statusActivo, statusPasivo } from '../../../data/balance/BALANCE_DATA';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';

export default function Balance() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='balance-container'>
      <div className='table-title'>
        <div className="balance-title">Balance</div><div className='warning-icon'><BsFillExclamationTriangleFill />¡Error en la tabla! Compruebe los valores introducidos<BsFillExclamationTriangleFill /></div>
      </div>
      <div className="balance-table">
        <BalanceForm open={open} setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <div className="balance-tables-container">
          <SituationTable data={activos} flag={true} status={statusActivo}></SituationTable>
          <SituationTable data={pasivos} status={statusPasivo}></SituationTable>
        </div>
      </div>
    </div>
  )
}
