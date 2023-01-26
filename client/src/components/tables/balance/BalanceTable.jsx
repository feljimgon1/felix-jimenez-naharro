import React from 'react'
import { Button, Table, TableBody, TableCell, TableRow } from '@mui/material'
import './BalanceTable.scss'
import BalanceForm from '../../modals/balance/BalanceForm';

const activo = [
    { name: 'Activo no corriente', value: 0, composed: true },
    { name: 'Inmovilizado inmaterial', value: 0, composed: false },
    { name: 'Inmovilizado material', value: 0, composed: false },
    { name: 'Otros activos fijos', value: 0, composed: false },
    { name: 'Activo corriente', value: 0, composed: true },
    { name: 'Existencias', value: 0, composed: false },
    { name: 'Deudores', value: 0, composed: false },
    { name: 'Otros activos líquidos', value: 0, composed: false }
];

const pasivo = [
    { name: 'Fondos propios', value: 0, composed: true },
    { name: 'Capital suscrito', value: 0, composed: false },
    { name: 'Otros fondos propios', value: 0, composed: false },
    { name: 'Pasivo no corriente', value: 0, composed: true },
    { name: 'Deuda antigua', value: 0, composed: false },
    { name: 'Deuda nueva', value: 0, composed: false },
    { name: 'Provisiones', value: 0, composed: false },
    { name: 'Pasivo corriente', value: 0, composed: true },
    { name: 'Deudas financieras', value: 0, composed: false },
    { name: 'Acreedores comerciales', value: 0, composed: false },
    { name: 'Otros pasivos líquidos', value: 0, composed: false }
]

export default function BalanceTable() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <BalanceForm open={open} setOpen={setOpen} />
            <div className="actions-container">
                <Button variant='contained' className='btn-edit' onClick={handleClickOpen}>Editar</Button>
            </div>
            <div className="balance-tables-container">
                <div className='table-container'>
                    <Table>
                        <TableBody>
                            {activo.map((row) => (
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
                <div className='table-container'>
                    <Table>
                        <TableBody>
                            {pasivo.map((row) => (
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