import React, { useCallback, useEffect, useState } from 'react';
import ActionsTable from '../../../components/actions/tables/ActionsTable';
import CuentaPerdidasGananciasForm from '../../../components/modals/cuenta-perdidas-ganancias/CuentaPerdidasGananciasForm';
import SituationTable from '../../../components/tables/situacion/SituationTable';
import './CuentaPerdidasGanancias.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCuentaPerdidasGananciasData } from '../../../redux/slices/cuentaPerdidasGananciasSlice';
import { fetchCuentaPerdidasGanancias } from '../../../services/cuenta-perdidas-ganancias/cuenta-perdidas-ganancias.api.js';
import { flatCuentaPerdidasGanancias } from '../../../services/helpers/flatData';

export default function CuentaPerdidasGanancias() {

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
  const [isFetchPending, setIsFetchPending] = React.useState(true);

  const cuentaPerdidasGananciasData = useSelector((state) => state.cuentaPerdidasGanancias.cuentaPerdidasGanancias.data)
  const cuentaPerdidasGananciasStatus = useSelector((state) => state.cuentaPerdidasGanancias.cuentaPerdidasGanancias.status)

  const [currentCuentaPerdidasGanancias, setCurrentCurrentPerdidasGanancias] = useState(cuentaPerdidasGananciasData)

  const populateCuentaPerdidasGanancias = useCallback(async () => {
    let fetchedCuentaPerdidasGanancias = await fetchCuentaPerdidasGanancias()
    let flattenedCuentaPerdidasGanancias = flatCuentaPerdidasGanancias(fetchedCuentaPerdidasGanancias)
    setCurrentCurrentPerdidasGanancias(flattenedCuentaPerdidasGanancias)
    dispatch(setCuentaPerdidasGananciasData(flattenedCuentaPerdidasGanancias))
    setIsFetchPending(false)
  }, [dispatch, setIsFetchPending])

  useEffect(() => {
    populateCuentaPerdidasGanancias()
  }, [populateCuentaPerdidasGanancias])

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='cuenta-perdidas-ganancias-container'>
      <div className="cuenta-perdidas-ganancias-title">Cuenta de pérdidas y ganancias</div>
      <div className="cuenta-perdidas-ganancias-table">
        <CuentaPerdidasGananciasForm
          cuentaPerdidasGanancias={currentCuentaPerdidasGanancias}
          open={open}
          setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <SituationTable isFetchPending={isFetchPending} data={cuentaPerdidasGananciasData} status={cuentaPerdidasGananciasStatus}></SituationTable>
      </div>
    </div>
  )
}
