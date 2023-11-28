import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { login } from '../../services/auth/login'
import { Notification } from '../../components/notification/Notification'
import './Login.scss'
import { LoadingButton } from '@mui/lab'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState(undefined)
  const [isPending, setIsPending] = useState(false)

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const submit = async (event) => {
    event.preventDefault()
    setIsPending(true)
    setMessage(await login({ email: email, password: password }))
  }

  useEffect(() => {
    if (message?.success !== true) {
      setIsPending(false)
    } else if (message?.success === true) {
      localStorage.setItem('user', JSON.stringify(message))
      setTimeout(()=>{
        navigate('/dashboard')
      }, 1500)
    }
  }, [message, navigate])

  return (
    <div className='login-container'>
      <div className='form-card'>
        <div className="form-title">
          Iniciar sesión
        </div>
        {
          message &&
          <Notification
            notification={message}
          />
        }
        <form onSubmit={submit} className="form-container">
          <TextField
            id="input-email"
            label="Email"
            variant="outlined"
            type="email"
            onChange={handleChangeEmail} />
          <TextField
            id="input-password"
            label="Contraseña"
            variant="outlined"
            type="password"
            onChange={handleChangePassword} />
          <LoadingButton
            loading={isPending}
            onClick={submit}
            variant='contained'
            className='loading-button'
          >
            Registro
          </LoadingButton>
        </form>
      </div>
    </div>
  )
}
