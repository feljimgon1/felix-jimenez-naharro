import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './EstrategiaMercadoForm.scss';
import useWindowDimensions from '../../../hooks/useWindowsDimensions';

const steps = [
  {
    name: 'Objetivo de ventas',
    fields: [
      'Total esperado en 5 años (€)',
      'Año 1',
      'Año 2',
      'Año 3',
      'Año 4',
      'Año 5',
    ]
  },
  {
    name: 'Número de empleados',
    fields: [
      'Año 1',
      'Año 2',
      'Año 3',
      'Año 4',
      'Año 5',
    ]
  }, {
    name: 'Gasto medio por empleado',
    fields: [
      'Año 1',
      'Año 2',
      'Año 3',
      'Año 4',
      'Año 5',
    ]
  }, {
    name: 'Aprovisionamiento/Ventas',
    fields: [
      'Año 1',
      'Año 2',
      'Año 3',
      'Año 4',
      'Año 5',
    ]
  }, {
    name: 'Otros gastos de explotación/Ventas',
    fields: [
      'Año 1',
      'Año 2',
      'Año 3',
      'Año 4',
      'Año 5',
    ]
  },
];

export default function EstrategiaMercadoForm({ open, setOpen }) {

  const [activeStep, setActiveStep] = React.useState(0);
  const { width } = useWindowDimensions();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(width)

  return (
    <Dialog open={open} onClose={handleClose} className='estrategia-mercado-form-container'>
      <DialogContent className='estrategia-mercado-dialog-content'>
        <form>
          <Stepper nonLinear activeStep={activeStep} orientation={width < 768 ? 'vertical' : 'horizontal'}>
            {steps.map((step, index) => (
              <Step className='step' key={index} onClick={handleStep(index)}>
                <StepLabel sx={{marginBottom: '.75em'}}>{step.name}</StepLabel>
                <div className="fields-container">
                  {step.fields.map((field, index) => {
                    return (
                      <TextField className='field' key={index} type="number" id="filled-basic" label={field} variant="filled" onWheel={(e) => e.target.blur()}/>
                    )
                  })}
                </div>
              </Step>
            ))}
          </Stepper>
        </form>
      </DialogContent>
      <DialogActions sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant='contained' className='btn-contained' onClick={handleClose}>Cancelar</Button>
        <Button variant='contained' className='btn-contained' onClick={handleClose}>Guardar</Button>
      </DialogActions>
    </Dialog >
  )
}
