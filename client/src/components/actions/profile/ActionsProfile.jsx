import React from 'react'
import './ActionsProfile.scss';
import { Button } from '@mui/material';

export default function ActionsProfile(props) {
  return (
    <div className='profile-actions-container'>
      {props.edit ? <Button variant='contained'>Editar</Button> : undefined}
      {props.delete ? <Button variant='contained' color='error'>Eliminar</Button> : undefined}
    </div>
  )
}
