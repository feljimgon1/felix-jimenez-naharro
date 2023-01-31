import React from 'react'
import './ActionsTable.scss';
import { Button } from '@mui/material';

export default function ActionsTable({ handleClickOpen }) {
  return (
    <div className="actions-container">
      <Button variant='contained' className='btn-edit' onClick={handleClickOpen}>Editar</Button>
    </div>
  )
}
