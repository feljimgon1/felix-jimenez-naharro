import React, { useEffect, useState } from 'react'
import './BalanceForm.scss';
import './BalanceForm.scss';
import { Dialog, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { setActivosData, setPasivosData } from '../../../redux/slices/balanceSlice'
import { useDispatch } from 'react-redux';
import { updateBalance } from '../../../services/balance/balance.api';

export default function BalanceForm({ open, setOpen, activos, pasivos, handleOpenSnackBar }) {

  const dispatch = useDispatch()

  const [currentActivos, setCurrentActivos] = useState(activos)
  const [currentPasivos, setCurrentPasivos] = useState(pasivos)

  const [updatedActivos, setUpdatedActivos] = useState([])
  const [updatedPasivos, setUpdatedPasivos] = useState([])

  useEffect(() => {
    setCurrentActivos(activos)
    setCurrentPasivos(pasivos)
  }, [activos, pasivos])

  const parseField = (fieldName) => {
    return fieldName.replace(/\s+/g, '-')
      .replace('í', 'i')
      .toLowerCase()
  }

  const findActivosField = (field) => {
    return activos.find(item =>
      parseField(item.name) === parseField(field))
  }

  const findPasivosField = (field) => {
    return pasivos.find(item =>
      parseField(item.name) === parseField(field))
  }

  const changeComposedActivosComponent = (updatedField) => {
    if (updatedField.name === 'Inmovilizado inmaterial' ||
      updatedField.name === 'Inmovilizado material' ||
      updatedField.name === 'Otros activos fijos'
    ) {
      return 0
    } else {
      return 4
    }
  }

  const changeComposedPasivosComponent = (updatedField) => {
    if (
      updatedField.name === 'Capital suscrito' ||
      updatedField.name === 'Otros fondos propios'
    ) {
      return 0
    } else if (
      updatedField.name === 'Deuda antigua' ||
      updatedField.name === 'Deuda nueva' ||
      updatedField.name === 'Provisiones'
    ) {
      return 3
    } else if (
      updatedField.name === 'Deudas financieras' ||
      updatedField.name === 'Acreedores comerciales' ||
      updatedField.name === 'Otros pasivos líquidos'
    ) {
      return 7
    }
  }

  const handleChangeActivos = (event) => {
    // TODO: Change status of the composed elements -> Could be done from BE

    // Retrieve the selected field
    const { name, value } = event.target
    var selectedField = findActivosField(name)
    var updatedField = { ...selectedField, value: parseInt(value) }

    // Add to the already selected fields
    setUpdatedActivos(() =>
      updatedActivos.includes(updatedField.name) ?
        updatedActivos :
        [...updatedActivos, updatedField.name]
    )

    // Check if the value is NaN (can happen when deleting a value). In that case, replace with 0
    if (String(updatedField.value) === String(NaN)) {
      updatedField.value = 0
    }

    // Retroeve the index of the selected field in order to sum the value to the correspondent 
    // composed field
    var index = activos.map(function (e) { return e.name }).indexOf(selectedField.name)
    const composedComponent = changeComposedActivosComponent(updatedField)

    // Create instance of previous state
    var newArr = [...currentActivos]
    newArr[index] = updatedField
    if (composedComponent === 0) {
      newArr[composedComponent] = {
        ...newArr[composedComponent],
        value: parseInt(newArr[1].value) + parseInt(newArr[2].value) + parseInt(newArr[3].value)
      }
    } else if (composedComponent === 4) {
      newArr[composedComponent] = {
        ...newArr[composedComponent],
        value: parseInt(newArr[5].value) + parseInt(newArr[6].value) + parseInt(newArr[7].value)
      }
    }
    setCurrentActivos(newArr)
  }

  const handleChangePasivos = (event) => {
    // TODO: Change status of the composed elements -> Could be done from BE

    // Retrieve the selected field
    const { name, value } = event.target
    var selectedField = findPasivosField(name)
    var updatedField = { ...selectedField, value: parseInt(value) }

    // Add to the already selected fields
    setUpdatedPasivos(() =>
      updatedPasivos.includes(updatedField.name) ?
        updatedPasivos :
        [...updatedPasivos, updatedField.name]
    )

    // Check if the value is NaN (can happen when deleting a value). In that case, replace with 0
    if (String(updatedField.value) === String(NaN)) {
      updatedField.value = 0
    }

    // Retroeve the index of the selected field in order to sum the value to the correspondent 
    // composed field
    var index = pasivos.map(function (e) { return e.name }).indexOf(selectedField.name)
    const composedComponent = changeComposedPasivosComponent(updatedField)

    // Create instance of previous state
    var newArr = [...currentPasivos]
    newArr[index] = updatedField
    if (composedComponent === 0) {
      newArr[composedComponent] = {
        ...newArr[composedComponent],
        value: parseInt(newArr[1].value) + parseInt(newArr[2].value)
      }
    } else if (composedComponent === 3) {
      newArr[composedComponent] = {
        ...newArr[composedComponent],
        value: parseInt(newArr[4].value) + parseInt(newArr[5].value) + parseInt(newArr[6].value)
      }
    }
    else if (composedComponent === 7) {
      newArr[composedComponent] = {
        ...newArr[composedComponent],
        value: parseInt(newArr[8].value) + parseInt(newArr[9].value) + parseInt(newArr[10].value)
      }
    }
    setCurrentPasivos(newArr)
  }

  const submit = (async (event) => {
    event.preventDefault()

    // API call
    const res = await updateBalance(currentActivos, currentPasivos, updatedActivos, updatedPasivos)
    
    // Update FE depending on response
    handleOpenSnackBar(res.message, res.success)
    dispatch(setActivosData(currentActivos))
    dispatch(setPasivosData(currentPasivos))
    handleClose()
  })

  const handleClose = () => {
    setOpen(false);
  };

  const preventNegative = (e) => {
    if (e.code === 'NumpadSubtract' ||
      e.code === 'ArrowDown' ||
      e.code === 'KeyE' ||
      e.code === '+') {
      e.preventDefault();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} className='balance-form-container'>
      <DialogContent>
        <form
          onSubmit={submit}
          className='balance-form-dialog'>
          <div className='activos'>
            <div className='main-title'>Activos</div>
            <div className='field'>
              <div className='title'>Activo no corriente</div>
              <TextField
                onKeyDown={preventNegative}
                onChange={handleChangeActivos}
                name='inmovilizado-inmaterial'
                type='number' id='filled-basic' label='Inmovilizado inmaterial' variant='filled' />
              <TextField
                onKeyDown={preventNegative}
                name='inmovilizado-material'
                onChange={handleChangeActivos}
                type='number' id='filled-basic' label='Inmovilizado material' variant='filled' />
              <TextField
                onKeyDown={preventNegative}
                name='otros-activos-fijos'
                onChange={handleChangeActivos}
                type='number' id='filled-basic' label='Otros activos fijos' variant='filled' />
            </div>
            <div className='field'>
              <div className='title'>Activo corriente</div>
              <TextField
                onKeyDown={preventNegative}
                name='Existencias'
                onChange={handleChangeActivos}
                type='number' id='filled-basic' label='Existencias' variant='filled' />
              <TextField
                onKeyDown={preventNegative}
                name='Deudores'
                onChange={handleChangeActivos}
                type='number' id='filled-basic' label='Deudores' variant='filled' />
              <TextField
                onKeyDown={preventNegative}
                name='Otros activos líquidos'
                onChange={handleChangeActivos}
                type='number' id='filled-basic' label='Otros activos líquidos' variant='filled' />
            </div>
          </div>
          <div className='pasivos'>
            <div className='main-title'>Pasivos</div>
            <div className='field'>
              <div className='title'>Fondos propios</div>
              <TextField
                name='Capital suscrito'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Capital suscrito' variant='filled' />
              <TextField
                name='Otros fondos propios'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Otros fondos propios' variant='filled' />
            </div>
            <div className='field'>
              <div className='title'>Pasivo no corriente</div>
              <TextField
                name='Deuda antigua'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Deuda antigua' variant='filled' />
              <TextField
                name='Deuda nueva'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Deuda nueva' variant='filled' />
              <TextField
                name='Provisiones'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Provisiones' variant='filled' />
            </div>
            <div className='field'>
              <div className='title'>Pasivo corriente</div>
              <TextField
                name='Deudas financieras'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Deudas financieras' variant='filled' />
              <TextField
                name='Acreedores comerciales'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Acreedores comerciales' variant='filled' />
              <TextField
                name='Otros pasivos líquidos'
                onChange={handleChangePasivos}
                type='number' id='filled-basic' label='Otros pasivos líquidos' variant='filled' />
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