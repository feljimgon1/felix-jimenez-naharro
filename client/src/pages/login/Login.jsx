import { Button, Card, TextField } from '@mui/material'
import React from 'react'
import './Login.scss'

const submit = () => {

}

export default function Login() {
  return (
    <div className='login-container'>
        <Card className='form-card'>
                <div className="form-title">
                    Iniciar sesión
                </div>
                <form onClick={submit} className="form-container">
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
                    <Button sx={{width: 'fit-content', margin: '0 auto'}} variant="contained">Iniciar sesión</Button>
                </form>
            </Card>
    </div>
  )
}
