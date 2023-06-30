import React, { useState } from 'react'
import './Register.scss'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import Notification from '../../components/notification/Notification'

export default function Register() {

	const [user, setUser] = useState({
		name: '',
		surname: '',
		email: '',
		password: '',
	})

	const [resMessage, setResMessage] = useState()

	const handleSubmit = (e) => {
		e.preventDefault()
		setUser(user)
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		}
		fetch('http://localhost:3000/api/register', requestOptions)
			.then(res => res.json())
			.then(data => setResMessage(data.message))
	}

	return (
		<div className='register-container'>
			<div className='form-card'>
				<div className="form-title">
					Registro
				</div>
				<Notification message={resMessage} />
				<form onSubmit={handleSubmit} className="form-container">
					<TextField
						id="input-name"
						label="Nombre"
						variant="outlined"
						type="text"
						onChange={(event) => setUser({ ...user, name: event.target.value })} />
					<TextField
						id="input-surname"
						label="Apellidos"
						variant="outlined"
						type="text"
						onChange={(event) => setUser({ ...user, surname: event.target.value })} />
					<TextField
						id="input-email"
						label="Email"
						variant="outlined"
						type="email"
						onChange={(event) => setUser({ ...user, email: event.target.value })} />
					<TextField
						id="input-password"
						label="Contraseña"
						variant="outlined"
						type="password"
						onChange={(event) => setUser({ ...user, password: event.target.value })} />
					<TextField
						id="input-confirm-password"
						label="Repita la contraseña"
						variant="outlined"
						type="password" />
					<div className='acc-exists'>¿Ya tiene cuenta? Pulse <Link to="/login">aquí</Link></div>
					<Button type='submit' onClick={handleSubmit} className='btn centered' variant="contained">Registro</Button>
				</form>
			</div>
		</div>
	)
}
