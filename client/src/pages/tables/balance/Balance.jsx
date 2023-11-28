import React, { useEffect, useState } from 'react'
import './Balance.scss'
import BalanceForm from '../../../components/modals/balance/BalanceForm';
import SituationTable from '../../../components/tables/situacion/SituationTable';
import ActionsTable from '../../../components/actions/tables/ActionsTable';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { fetchBalance } from '../../../services/balance/balance.api';
import { setActivosData, setPasivosData } from '../../../redux/slices/balanceSlice';
import { flatActivos, flatPasivos } from '../../../services/helpers/flatData';

export default function Balance() {

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
  const [isFetchPending, setIsFetchPending] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const activosData = useSelector((state) => state.balance.activos.data)
  const pasivosData = useSelector((state) => state.balance.pasivos.data)

  const activosStatus = useSelector((state) => state.balance.activos.status)
  const pasivosStatus = useSelector((state) => state.balance.pasivos.status)

  const [currentActivos, setCurrentActivos] = useState(activosData)
  const [currentPasivos, setCurrentPasivos] = useState(pasivosData)

  const populateBalance = useCallback(async () => {
    let fetchedBalance = await fetchBalance()
    let flattenedActivos = flatActivos(fetchedBalance)
    let flattenedPasivos = flatPasivos(fetchedBalance)
    setCurrentActivos(flattenedActivos)
    setCurrentPasivos(flattenedPasivos)
    dispatch(setActivosData(flattenedActivos))
    dispatch(setPasivosData(flattenedPasivos))
    setIsFetchPending(false)
  }, [dispatch, setIsFetchPending])

  useEffect(() => {
    populateBalance();
  }, [populateBalance]);

  const sumaPasivos = useCallback(() => {
    let filtered = pasivosData.filter((item, index) =>
      index === 0 || index === 3 || index === 7)
    let acc = 0
    filtered.forEach(item => {
      acc += item.value;
    })
    return acc
  }, [pasivosData])

  const sumaActivos = useCallback(() => {
    let filtered = activosData?.filter((item, index) =>
      index === 0 || index === 4)
    let acc = 0
    filtered?.forEach(item => {
      acc += item.value;
    })
    return acc
  }, [activosData])

  const [currentSumaActivos, setCurrentSumaActivos] = useState(sumaActivos)
  const [currentSumaPasivos, setCurrentSumaPasivos] = useState(sumaPasivos)

  useEffect(() => {
    setCurrentSumaActivos(sumaActivos)
    setCurrentSumaPasivos(sumaPasivos)
  }, [sumaActivos, sumaPasivos])

  return (
    <div className='balance-container'>
      <div className='table-title'>
        <div className="balance-title">Balance</div>
        <div className={`${currentSumaPasivos !== currentSumaActivos ? 'warning-icon' : ''}`}>
          {
            currentSumaPasivos !== currentSumaActivos ?
              <>
                <BsFillExclamationTriangleFill onClose={() => { }} />
                ¡Error en la tabla! El pasivo debe ser igual al activo
                <BsFillExclamationTriangleFill />
              </> : undefined
          }
        </div>
      </div>
      <div className="balance-table">
        <BalanceForm
          open={open}
          setOpen={setOpen}
          activos={currentActivos}
          pasivos={currentPasivos} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <div className="balance-tables-container">
          <SituationTable isFetchPending={isFetchPending} data={activosData} flag={true} status={activosStatus}></SituationTable>
          <SituationTable isFetchPending={isFetchPending} data={pasivosData} status={pasivosStatus}></SituationTable>
        </div>
      </div>
    </div>
  )
}
