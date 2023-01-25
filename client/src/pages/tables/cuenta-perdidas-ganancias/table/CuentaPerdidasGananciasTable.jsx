import React from 'react';
import './CuentaPerdidasGananciasTable.scss';
import CuentaPerdidasGananciasForm from '../../../../components/modals/cuenta-perdidas-ganancias/CuentaPerdidasGananciasForm';
import { Button, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material';

const rows = [
  { name: 'Inmovilizado', value: 0, composed: true },
  { name: 'Inmovilizado inmaterial', value: 0, composed: false },
  { name: 'Inmovilizado material', value: 0, composed: false },
  { name: 'Otros activos fijos', value: 0, composed: false },
  { name: 'Activo circulante', value: 0, composed: true },
  { name: 'Existencias', value: 0, composed: false },
  { name: 'Deudores', value: 0, composed: false },
  { name: 'Otros activos líquidos', value: 0, composed: false }
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
        <Paper className='table-container'>
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
        </Paper>
      </div>
    </>

  )
}
