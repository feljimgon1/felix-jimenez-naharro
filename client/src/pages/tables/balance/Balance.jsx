import React from 'react'
import './Balance.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  { name: 'Total activos', value: 0, composed: true },
  { name: 'Inmovilizado inmaterial', value: 0, composed: false },
  { name: 'Inmovilizado material', value: 0, composed: false },
  { name: 'Activos fijos', value: 0, composed: false },
];

export default function Balance() {
  return (
    <div className='balance-container'>
      <div className="balance-title">Balance</div>
      <div className="balance-table">
        <Paper className='table-container'>
          <Table>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className={row.composed===true ? 'composed-item' : ''}>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  )
}
