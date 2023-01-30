import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '@mui/material'
import './SituationTable.scss';

export default function SituationTable({ data, handleClickOpen, flag, status }) {
    return (
        <div className='table-container'>
            <div id="review-status" className='review-status'>
                <div className={`
                ${status === 'Waiting for review' ? 'review-waiting' : ''}
                ${status === 'Review in progress' ? 'review-in-progress' : ''}
                ${status === 'Review finished' ? 'review-finished' : ''}
                `}>{status}</div>
            </div>
            <Table>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className={row.composed === true ? 'composed-item' : ''}>
                                {row.name}
                            </TableCell>
                            <TableCell sx={{ fontWeight: `${row.composed === true ? '700' : ''}` }} align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
