import React from 'react'
import './BalanceForm.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function BalanceForm({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <form className='balance-form-dialog'>
                    <div className="activos-fijos">
                        <div className='title'>Activos fijos</div>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Inmovilizado inmaterial"
                            type="number"
                            variant="filled"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Inmovilizado material"
                            type="number"
                            variant="filled"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Activos fijos"
                            type="number"
                            variant="filled"
                        />
                    </div>
                    <div className="pasivos-fijos">
                        <div className='title'>Pasivos fijos</div>
                        <div className="activos-fijos">
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Inmovilizado inmaterial"
                                type="number"
                                variant="filled"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Inmovilizado material"
                                type="number"
                                variant="filled"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Activos fijos"
                                type="number"
                                variant="filled"
                            />
                        </div>
                    </div>
                    <div className='title'>Pasivos fijos</div>
                        <div className="activos-fijos">
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Inmovilizado inmaterial"
                                type="number"
                                variant="filled"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Inmovilizado material"
                                type="number"
                                variant="filled"
                            />
                            <></>
                        </div>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Guardar</Button>
            </DialogActions>
        </Dialog>
    )
}
