import React from 'react'
import './BalanceForm.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function BalanceForm({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <form className='balance-form-dialog'>
                    <div className='activos'>
                        <div className="main-title">Activos</div>
                        <div className="field">
                            <div className="title">Activo no corriente</div>
                            <TextField type='number' id="filled-basic" label="Inmovilizado inmaterial" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Inmovilizado material" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Otros activos fijos" variant="filled" />
                        </div>
                        <div className="field">
                            <div className="title">Activo corriente</div>
                            <TextField type='number' id="filled-basic" label="Existencias" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Deudores" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Otros activos líquidos" variant="filled" />
                        </div>
                    </div>
                    <div className='pasivos'>
                    <div className="main-title">Pasivos</div>
                        <div className="field">
                            <div className="title">Fondos propios</div>
                            <TextField type='number' id="filled-basic" label="Capital suscrito" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Otros fondos propios" variant="filled" />
                        </div>
                        <div className="field">
                            <div className="title">Pasivo no corriente</div>
                            <TextField type='number' id="filled-basic" label="Deuda antigua" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Deuda nueva" variant="filled" />
                        </div>
                        <div className="field">
                            <div className="title">Pasivo corriente</div>
                            <TextField type='number' id="filled-basic" label="Deudas financieras" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Acreedores comerciales" variant="filled" />
                            <TextField type='number' id="filled-basic" label="Otros pasivos líquidos" variant="filled" />
                        </div>
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' className='btn-contained' onClick={handleClose}>Cancel</Button>
                <Button variant='contained' className='btn-contained' onClick={handleClose}>Guardar</Button>
            </DialogActions>
        </Dialog>
    )
}
