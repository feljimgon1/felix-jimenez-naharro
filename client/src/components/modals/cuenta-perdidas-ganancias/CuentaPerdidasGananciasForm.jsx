import React, { useEffect, useState } from 'react'
import './CuentaPerdidasGananciasForm.scss';
import { Dialog, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateCuentaPerdidasGanancias } from '../../../services/cuenta-perdidas-ganancias/cuenta-perdidas-ganancias.api.js';
import { setCuentaPerdidasGananciasData } from '../../../redux/slices/cuentaPerdidasGananciasSlice';

export default function CuentaPerdidasGananciasForm({ open, setOpen, cuentaPerdidasGanancias }) {

  const dispatch = useDispatch()

  const [currentCuentaPerdidasGanancias, setCurrentCuentaPerdidasGanancias] = useState(cuentaPerdidasGanancias)

  const [updatedCuentaPerdidasGanancias, setUpdatedCuentaPerdidasGanancias] = useState([])

  useEffect(() => {
    setCurrentCuentaPerdidasGanancias(cuentaPerdidasGanancias)
  }, [cuentaPerdidasGanancias])

  const handleClose = () => {
    setOpen(false);
  };

  const parseField = (fieldName) => {
    return fieldName.replace(/\s+/g, '-')
      .replace('ó', 'o')
      .replace('í', 'i')
      .toLowerCase()
  }

  const findField = (field) => {
    console.log(field, cuentaPerdidasGanancias);
    return cuentaPerdidasGanancias.find(item =>
      parseField(item.name) === parseField(field))
  }

  const changeComposedComponent = (updatedField) => {
    if (
      updatedField.name === 'Importe neto cifra de ventas' ||
      updatedField.name === 'Otros ingresos de explotación' ||
      updatedField.name === 'TRPPI'
    ) {
      return 0
    } else if (
      updatedField.name === 'Consumo de mercaderías y materias' ||
      updatedField.name === 'Gasto de personal' ||
      updatedField.name === 'Otros gastos de explotación'
    ) {
      return 4
    } else if (updatedField.name === 'CAT') {
      return 10
    } else if (
      updatedField.name === 'Ingresos financieros' ||
      updatedField.name === 'Gastos financieros'
    ) {
      return 13
    }
    else if (updatedField.name === 'Impuesto sobre sociedades') {
      return 16
    }
    else if (
      updatedField.name === 'Ingresos extraordinarios' ||
      updatedField.name === 'Gastos extraordinarios'
    ) {
      return 19
    }
  }

  const updateIngresosExplotacion = (newArr, composedComponent) => {
    return newArr[composedComponent] = {
      ...newArr[composedComponent],
      value: parseInt(newArr[1].value) + parseInt(newArr[2].value) + parseInt(newArr[3].value)
    }
  }

  const costesExplotacion = (newArr, composedComponent) => {
    return newArr[composedComponent] = {
      ...newArr[composedComponent],
      value: parseInt(newArr[5].value) + parseInt(newArr[6].value) + parseInt(newArr[7].value)
    }
  }

  const updateEBITDA = (newArr) => {
    return newArr[8] = {
      ...newArr[8],
      value: parseInt(newArr[0].value) - parseInt(newArr[4].value)
    }
  }

  const updateBAIT = (newArr) => {
    return newArr[10] = {
      ...newArr[10],
      value: parseInt(newArr[8].value) - parseInt(newArr[9].value)
    }
  }

  const updateResultadoFinanciero = (newArr) => {
    return newArr[13] = {
      ...newArr[13],
      value: parseInt(newArr[11].value) - parseInt(newArr[12].value)
    }
  }

  const updateResultadoOrdinarioAntesDeImpuestos = (newArr) => {
    return newArr[14] = {
      ...newArr[14],
      value: parseInt(newArr[10].value) + parseInt(newArr[13].value)
    }
  }

  const updateResultadosOrdinarios = (newArr) => {
    return newArr[16] = {
      ...newArr[16],
      value: parseInt(newArr[14].value) - parseInt(newArr[15].value)
    }
  }

  const updateResultadoActividadesExtraordinarias = (newArr) => {
    return newArr[19] = {
      ...newArr[19],
      value: parseInt(newArr[17].value) - parseInt(newArr[18].value)
    }
  }

  const updateResultadoEjercicio = (newArr) => {
    return newArr[20] = {
      ...newArr[20],
      value: parseInt(newArr[16].value) + parseInt(newArr[19].value)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    var selectedField = findField(name)
    var updatedField = { ...selectedField, value: parseInt(value) }
    setUpdatedCuentaPerdidasGanancias(() =>
      updatedCuentaPerdidasGanancias.includes(updatedField.name) ?
        updatedCuentaPerdidasGanancias :
        [...updatedCuentaPerdidasGanancias, updatedField.name]
    )
    if (String(updatedField.value) === String(NaN)) {
      updatedField.value = 0
    }
    var index = cuentaPerdidasGanancias.map(function (e) {
      return e.name
    }).indexOf(selectedField.name)
    const composedComponent = changeComposedComponent(updatedField)
    console.log(composedComponent);
    var newArr = [...currentCuentaPerdidasGanancias]
    newArr[index] = updatedField
    if (composedComponent === 0) {
      newArr[composedComponent] = updateIngresosExplotacion(newArr, composedComponent)
      newArr[8] = updateEBITDA(newArr)
      newArr[10] = updateBAIT(newArr)
      newArr[13] = updateResultadoFinanciero(newArr)
    } else if (composedComponent === 4) {
      newArr[composedComponent] = costesExplotacion(newArr, composedComponent)
      newArr[8] = updateEBITDA(newArr)
      newArr[10] = updateBAIT(newArr)
      newArr[13] = updateResultadoFinanciero(newArr)
      newArr[14] = updateResultadoOrdinarioAntesDeImpuestos(newArr)
    } else if (composedComponent === 10) {
      newArr[composedComponent] = updateBAIT(newArr, composedComponent)
    } else if (composedComponent === 13) {
      newArr[composedComponent] = updateResultadoFinanciero(newArr)
      newArr[14] = updateResultadoOrdinarioAntesDeImpuestos(newArr)
    } else if (composedComponent === 14) {
      newArr[14] = updateResultadoOrdinarioAntesDeImpuestos(newArr)
    } else if (composedComponent === 16) {
      newArr[14] = updateResultadoOrdinarioAntesDeImpuestos(newArr)
      newArr[16] = updateResultadosOrdinarios(newArr)
    } else if (composedComponent === 19) {
      newArr[19] = updateResultadoActividadesExtraordinarias(newArr)
    }
    newArr[20] = updateResultadoEjercicio(newArr)
    setCurrentCuentaPerdidasGanancias(newArr)
  }

  const preventNegative = (e) => {
    if (e.code === 'NumpadSubtract' ||
      e.code === 'ArrowDown' ||
      e.code === 'KeyE' ||
      e.code === '+') {
      e.preventDefault();
    }
  };

  const submit = (async (event) => {
    event.preventDefault()

    // API call
    await updateCuentaPerdidasGanancias(currentCuentaPerdidasGanancias, updatedCuentaPerdidasGanancias)
    // Update FE depending on response
    dispatch(setCuentaPerdidasGananciasData(currentCuentaPerdidasGanancias))
    handleClose()
  })

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <form className='cuenta-perdidas-ganancias-form-dialog'>
          <div className="col">
            <div className="field">
              <div className="title">Importe neto cifra de ventas</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='importe-neto-cifra-de-ventas'
                id="filled-basic" label="Importe neto cifra de ventas" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Otros ingresos de explotación</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                name='otros-ingresos-de-explotacion'
                type='number'
                id="filled-basic" label="Otros ingresos de explotación" variant="filled" />
            </div>
            <div className="field">
              <div className="title">TRPPI</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                name='trppi'
                type='number'
                id="filled-basic" label="TRPPI" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Consumo de mercaderías y materias</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='consumo-de-mercaderias-y-materias'
                id="filled-basic" label="Consumo de mercaderías y materias" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Gasto de personal</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='gasto-de-personal'
                id="filled-basic" label="Gasto de personal" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Otros gastos de explotación</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='otros-gastos-de-explotacion'
                id="filled-basic" label="Otros gastos de explotación" variant="filled" />
            </div>
            <div className="field">
              <div className="title">CAT</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='cat'
                id="filled-basic" label="CAT" variant="filled" />
            </div>
          </div>
          <div className="col">
            <div className="field">
              <div className="title">Ingresos financieros</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='ingresos-financieros'
                id="filled-basic" label="Ingresos financieros" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Gastos financieros</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='gastos-financieros'
                id="filled-basic" label="Gastos financieros" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Impuesto sobre sociedades</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='impuesto-sobre-sociedades'
                id="filled-basic" label="Impuesto sobre sociedades" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Ingresos extraordinarios</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='ingresos-extraordinarios'
                id="filled-basic" label="Ingresos extraordinarios" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Gastos extraordinarios</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChange}
                type='number'
                name='gastos-extraordinarios'
                id="filled-basic" label="Gastos extraordinarios" variant="filled" />
            </div>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' className='btn btn-contained' onClick={handleClose}>Cancel</Button>
        <Button variant='contained' className='btn btn-contained' onClick={submit}>Guardar</Button>
      </DialogActions>
    </Dialog>
  )
}