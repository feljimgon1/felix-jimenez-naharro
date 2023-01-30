import React from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import './EstrategiaMercadoTable.scss'
import EstrategiaMercadoForm from '../../modals/estrategia-mercado/EstrategiaMercadoForm';
import { estrategiaMercadoData as rows } from '../../../data/estrategia-mercado/ESTRATEGIA_MERCADO_DATA';

export default function EstrategiaMercadoTable() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <EstrategiaMercadoForm open={open} setOpen={setOpen} />
      <div className="actions-container">
        <Button variant='contained' className='btn-edit' onClick={handleClickOpen}>Editar</Button>
      </div>
      <div className="estrategia-mercado-tables-container">
        <Paper sx={{ overflow: "auto" }} className='table-container'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Año 1</TableCell>
                <TableCell align="center">Año 2</TableCell>
                <TableCell align="center">Año 3</TableCell>
                <TableCell align="center">Año 4</TableCell>
                <TableCell align="center">Año 5</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className={row.composed === true ? 'composed-item' : ''}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.value[0]}</TableCell>
                  <TableCell align="center">{row.value[1]}</TableCell>
                  <TableCell align="center">{row.value[2]}</TableCell>
                  <TableCell align="center">{row.value[3]}</TableCell>
                  <TableCell align="center">{row.value[4]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </>
  )
}
