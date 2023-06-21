import React from 'react'
import './PrevisionalTable.scss'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

export default function PrevisionalTable({ rows, status }) {
    return (
        <Paper sx={{ overflow: "auto" }} className='table-container'>
            <div id="review-status" className='review-status'>
                <div className={`
                ${status === 'Waiting for review' ? 'review-waiting' : ''}
                ${status === 'Review in progress' ? 'review-in-progress' : ''}
                ${status === 'Review finished' ? 'review-finished' : ''}
                `}>{status}</div>
            </div>
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
    )
}
