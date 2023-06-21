import React from 'react'
import './ActionsProfile.scss';
import { Button } from '@mui/material';

export default function ActionsProfile() {
  return (
    <div className='profile-actions-container'>
        <Button variant='contained'>Editar</Button>
        <Button variant='contained' color='error'>Eliminar</Button>
    </div>
  )
}
