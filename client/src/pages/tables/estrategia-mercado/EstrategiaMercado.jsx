import React, { useCallback, useEffect } from 'react'
import './EstrategiaMercado.scss'
import EstrategiaMercadoForm from '../../../components/modals/estrategia-mercado/EstrategiaMercadoForm'
import ActionsTable from '../../../components/actions/tables/ActionsTable';
import PrevisionalTable from '../../../components/tables/previsional/PrevisionalTable';
import { setEstrategiaMercadoData } from '../../../redux/slices/estrategiaMercadoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEstrategiaMercado } from '../../../services/estrategia-mercado/estrategia-mercado-api';
import { flatEstrategiaMercado } from '../../../services/helpers/flatData';

export default function EstrategiaMercado() {

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
  const [isFetchPending, setIsFetchPending] = React.useState(true);

  const estrategiaMercadoData = useSelector((state) => state.estrategiaMercado.estrategiaMercado.data)
  const estrategiaMercadoStatus = useSelector((state) => state.estrategiaMercado.estrategiaMercado.status)

  const [currentEstrategiaMercado, setCurrentCurrentPerdidasGanancias] = React.useState(estrategiaMercadoData)

  const populateEstrategiaMercado = useCallback(async () => {
    let fetchedEstrategiaMercado = await fetchEstrategiaMercado()
    console.log(fetchedEstrategiaMercado);
    let flattenedEstrategiaMercado = flatEstrategiaMercado(fetchedEstrategiaMercado)
    setCurrentCurrentPerdidasGanancias(flattenedEstrategiaMercado)
    dispatch(setEstrategiaMercadoData(flattenedEstrategiaMercado))
    setIsFetchPending(false)
  }, [dispatch, setIsFetchPending])

  useEffect(() => {
    populateEstrategiaMercado()
  }, [populateEstrategiaMercado])

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className='estrategia-mercado-container'>
      <div className="estrategia-mercado-title">Estrategia de mercado</div>
      <div className="estrategia-mercado-table">
        <EstrategiaMercadoForm estrategiaMercado={currentEstrategiaMercado} open={open} setOpen={setOpen} />
        <ActionsTable handleClickOpen={handleClickOpen}></ActionsTable>
        <PrevisionalTable isFetchPending={isFetchPending} rows={estrategiaMercadoData} status={estrategiaMercadoStatus}></PrevisionalTable>
      </div>
    </div>
  )
}
