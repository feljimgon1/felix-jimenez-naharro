import { Button, TextField } from '@mui/material'
import React from 'react'
import './Login.scss'

export default function Login() {

	const handleSubmit = () => {

	}

	return (
		<div className='login-container'>
			<div className='form-card'>
				<div className="form-title">
					Iniciar sesión
				</div>
				<form onClick={handleSubmit} className="form-container">
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
					<Button className='btn centered' variant="contained">Iniciar sesión</Button>
				</form>
				<div className="google-login-container">Login</div>
			</div>
		</div>
	)
}
