import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './PoliticaFinanciacionForm.scss';
import useWindowDimensions from '../../../hooks/useWindowsDimensions';

const steps = [
    {
        name: 'Vencimiento Deuda Antigua',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    },
    {
        name: 'Interés Deuda Antigua %',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }, {
        name: 'Deuda nueva',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }, {
        name: 'Vencimiento Deuda Nueva',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }, {
        name: 'Interés Deuda Nueva %',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }, {
        name: 'Carencia',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }, {
        name: 'Ampliación de Capital',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    }, {
        name: 'Prima de Emisión',
        fields: [
            'Año 1',
            'Año 2',
            'Año 3',
            'Año 4',
            'Año 5',
        ]
    },
];

export default function PoliticaFinanciacionForm({ open, setOpen }) {

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
        <Dialog open={open} onClose={handleClose} className='politica-financiacion-form-container'>
            <DialogContent className='politica-financiacion-dialog-content'>
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
                <Button variant='contained' className='btn-contained' onClick={handleClose}>Cancelar</Button>
                <Button variant='contained' className='btn-contained' onClick={handleClose}>Guardar</Button>
            </DialogActions>
        </Dialog >
    )
}
