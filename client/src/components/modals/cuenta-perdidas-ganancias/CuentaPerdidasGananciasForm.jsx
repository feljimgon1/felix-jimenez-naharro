import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import React from 'react'

export default function CuentaPerdidasGananciasForm({ open, setOpen }) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <form className='cuenta-perdidas-ganancias-form-dialog'>
          
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' className='btn-contained' onClick={handleClose}>Cancel</Button>
        <Button variant='contained' className='btn-contained' onClick={handleClose}>Guardar</Button>
      </DialogActions>
    </Dialog>
  )
}
