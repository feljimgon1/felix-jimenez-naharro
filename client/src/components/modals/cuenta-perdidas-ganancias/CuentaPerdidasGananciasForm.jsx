import React from 'react'
import './CuentaPerdidasGananciasForm.scss';
import { Dialog, DialogContent, DialogActions, Button, TextField } from '@mui/material';

export default function CuentaPerdidasGananciasForm({ open, setOpen }) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <form className='cuenta-perdidas-ganancias-form-dialog'>
          <div className="col">
            <div className="field">
              <div className="title">Ingresos de explotación</div>
              <TextField type='number' id="filled-basic" label="Ingresos de explotación" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Importe neto cifra de ventas</div>
              <TextField type='number' id="filled-basic" label="Importe neto cifra de ventas" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Otros ingresos de explotación</div>
              <TextField type='number' id="filled-basic" label="Otros ingresos de explotación" variant="filled" />
            </div>
            <div className="field">
              <div className="title">TRPPI</div>
              <TextField type='number' id="filled-basic" label="TRPPI" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Consumo de mercaderías y materias</div>
              <TextField type='number' id="filled-basic" label="Consumo de mercaderías y materias" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Gasto de personal</div>
              <TextField type='number' id="filled-basic" label="Gasto de personal" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Otros gastos de explotación</div>
              <TextField type='number' id="filled-basic" label="Otros gastos de explotación" variant="filled" />
            </div>
            <div className="field">
              <div className="title">EBITDA</div>
              <TextField type='number' id="filled-basic" label="EBITDA" variant="filled" />
            </div>
            <div className="field">
              <div className="title">CAT</div>
              <TextField type='number' id="filled-basic" label="CAT" variant="filled" />
            </div>
            <div className="field">
              <div className="title">BAIT</div>
              <TextField type='number' id="filled-basic" label="BAIT" variant="filled" />
            </div>
          </div>
          <div className="col">
            <div className="field">
              <div className="title">Ingresos financieros</div>
              <TextField type='number' id="filled-basic" label="Ingresos financieros" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Gastos financieros</div>
              <TextField type='number' id="filled-basic" label="Gastos financieros" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Resultado financiero</div>
              <TextField type='number' id="filled-basic" label="Resultado financiero" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Resultado ordinarios antes de impuestos</div>
              <TextField type='number' id="filled-basic" label="Resultado ordinarios antes de impuestos" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Impuesto sobre sociedades</div>
              <TextField type='number' id="filled-basic" label="Impuesto sobre sociedades" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Resultado actividades ordinarias</div>
              <TextField type='number' id="filled-basic" label="Resultado actividades ordinarias" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Ingresos ordinarios</div>
              <TextField type='number' id="filled-basic" label="Ingresos ordinarios" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Gastos ordinarios</div>
              <TextField type='number' id="filled-basic" label="Gastos ordinarios" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Resultado actividades extraordinarias</div>
              <TextField type='number' id="filled-basic" label="Resultado actividades extraordinarias" variant="filled" />
            </div>
            <div className="field">
              <div className="title">Resultado del ejercicio</div>
              <TextField type='number' id="filled-basic" label="Resultado del ejercicio" variant="filled" />
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
