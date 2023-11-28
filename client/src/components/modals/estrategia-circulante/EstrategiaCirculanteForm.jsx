import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './EstrategiaCirculanteForm.scss';
import useWindowDimensions from '../../../hooks/useWindowsDimensions';

const steps = [
    {
        name: 'Periodo medio de cobro',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    },
    {
        name: 'Periodo medio de existencias',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }, {
        name: 'Periodo medio de pago',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }
];

export default function EstrategiaCirculanteForm({ open, setOpen }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const { width } = useWindowDimensions();

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} className='estrategia-circulante-form-container'>
            <DialogContent className='estrategia-circulante-dialog-content'>
                <form>
                    <Stepper nonLinear activeStep={activeStep} orientation={width < 768 ? 'vertical' : 'horizontal'}>
                        {steps.map((step, index) => (
                            <Step className='step' key={index} onClick={handleStep(index)}>
                                <StepLabel sx={{ marginBottom: '.75em' }}>{step.name}</StepLabel>
                                <div className="fields-container">
                                    {step.fields.map((field, index) => {
                                        return (
                                            <TextField className='field' key={index} type="number" id="filled-basic" label={field} variant="filled" onWheel={(e) => e.target.blur()} />
                                        )
                                    })}
                                </div>
                            </Step>
                        ))}
                    </Stepper>
                </form>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant='contained' className='btn btn-contained' onClick={handleClose}>Cancelar</Button>
                <Button variant='contained' className='btn btn-contained' onClick={handleClose}>Guardar</Button>
            </DialogActions>
        </Dialog >
    )
}
