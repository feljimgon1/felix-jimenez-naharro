import React from 'react'
import './Register.scss'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Register() {

    const submit = () => {

    }

    return (
        <div className='register-container'>
            <div className='form-card'>
                <div className="form-title">
                    Registro
                </div>
                <form onClick={submit} className="form-container">
                    <TextField
                        id="input-name"
                        label="Nombre"
                        variant="outlined"
                        type="text" />
                    <TextField
                        id="input-surname"
                        label="Apellidos"
                        variant="outlined"
                        type="text" />
                    <TextField
                        id="input-email"
                        label="Email"
                        variant="outlined"
                        type="email" />
                    <TextField
                        id="input-password"
                        label="Contraseña"
                        variant="outlined"
                        type="password" />
                    <TextField
                        id="input-confirm-password"
                        label="Repita la contraseña"
                        variant="outlined"
                        type="password" />
                    <div className='acc-exists'>¿Ya tiene cuenta? Pulse <Link to="/login">aquí</Link></div>
                    <Button sx={{width: 'fit-content', margin: '0 auto'}} variant="contained">Registro</Button>
                </form>
            </div>
        </div>
    )
}
