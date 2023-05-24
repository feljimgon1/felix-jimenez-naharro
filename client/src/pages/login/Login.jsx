import { Button, TextField } from '@mui/material'
import React from 'react'
import './Login.scss'
import { GoogleLogin } from '@react-oauth/google'
import useWindowDimensions from '../../hooks/useWindowsDimensions'

export default function Login() {

	const handleSubmit = () => {

	}

	const clientId = '102596810967-934ndsgh11uqf73lh1al9vlpl7lqlke9.apps.googleusercontent.com'

	const onSuccess = (res) => {
		console.log('success!', res);
	}

	const onFailure = (res) => {
		console.log('failure!', res);
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
				<div className="google-login-container">
					<GoogleLogin
						shape='circle'
						// type='icon'
						clientId={clientId}
						onSuccess={onSuccess}
						onFailure={onFailure}
						cookiePolicy={'single-host-origin'}
						isSignedIn={true}
					/>
				</div>
			</div>
		</div>
	)
}
