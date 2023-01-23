import { Button, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import './BalanceTable.scss'
import BalanceForm from '../../../../components/modals/BalanceForm';

const rows = [
    { name: 'Total activos', value: 0, composed: true },
    { name: 'Inmovilizado inmaterial', value: 0, composed: false },
    { name: 'Inmovilizado material', value: 0, composed: false },
    { name: 'Activos fijos', value: 0, composed: false },
  ];

export default function BalanceTable() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
        <BalanceForm open={open} setOpen={setOpen}/>
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
            <div className="actions-container">
                <Button variant='contained' className='btn-edit' onClick={handleClickOpen}>Editar</Button>
            </div>
        </Paper>
        </>
    )
}
