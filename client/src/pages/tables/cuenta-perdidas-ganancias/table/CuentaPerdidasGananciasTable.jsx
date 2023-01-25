import React from 'react';
import './CuentaPerdidasGananciasTable.scss';
import CuentaPerdidasGananciasForm from '../../../../components/modals/cuenta-perdidas-ganancias/CuentaPerdidasGananciasForm';
import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material';

const rows = [
  { name: 'Ingresos de explotación', value: 0, composed: true },
  { name: 'Importe neto cifra de ventas', value: 0, composed: false },
  { name: 'Otros ingresos de explotación', value: 0, composed: false },
  { name: 'TRPPI', value: 0, composed: false },
  { name: 'Consumo de mercaderías y materias', value: 0, composed: false },
  { name: 'Gasto de personal', value: 0, composed: false },
  { name: 'Otros gastos de explotación', value: 0, composed: false },
  { name: 'EBITDA', value: 0, composed: true },
  { name: 'CAT', value: 0, composed: false },
  { name: 'BAIT', value: 0, composed: true },
  { name: 'Ingresos financieros', value: 0, composed: false },
  { name: 'Gastos financieros', value: 0, composed: false },
  { name: 'Resultado financiero', value: 0, composed: true },
  { name: 'Resultado ordinarios antes de impuestos', value: 0, composed: true },
  { name: 'Impuesto sobre sociedades', value: 0, composed: false },
  { name: 'Resultado actividades ordinarias', value: 0, composed: true },
  { name: 'Ingresos ordinarios', value: 0, composed: false },
  { name: 'Gastos ordinarios', value: 0, composed: false },
  { name: 'Resultado actividades extraordinarias', value: 0, composed: true },
  { name: 'Resultado del ejercicio', value: 0, composed: true },
];

export default function CuentaPerdidasGananciasTable() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  return (
    <>
      <CuentaPerdidasGananciasForm open={open} setOpen={setOpen} />
      <div className="actions-container">
        <Button variant='contained' className='btn-edit' onClick={handleClickOpen}>Editar</Button>
      </div>
      <div className="cuenta-perdidas-ganancias-tables-container">
        <div className='table-container'>
          <Table>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className={row.composed === true ? 'composed-item' : ''}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>

  )
}
