import React, { useEffect, useState } from 'react'
import './Register.scss'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { register } from '../../services/auth/register'
import { Notification } from '../../components/notification/Notification'
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const [user, setUser] = useState({})
  const [message, setMessage] = useState(undefined)
  const [isPending, setIsPending] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const checkCoincidentalPasswords = () => {
    return user.password === user.confirmPassword
  }

  const submit = async (event) => {
    event.preventDefault()
    if (checkCoincidentalPasswords()) {
      setIsPending(true)
      setMessage(await register(user))
    } else {
      setMessage({
        success: false,
        message: 'Las contraseñas no coinciden'
      })
    }
  }

  useEffect(() => {
    if (message?.success !== true) {
      setIsPending(false)
    } else {
      setTimeout(() => {
        navigate('/verification-email')
      }, 3000);
    }
  }, [message, navigate])

  return (
    <div className='register-container'>
      <div className='form-card'>
        <div className='form-title'>
          Registro
        </div>
        {
          message &&
          <Notification
            notification={message}
          />
        }
        <form onSubmit={submit} className='form-container'>
          <div className="form-inner-container">
            <div className="datos-personales">
              <div className="title">
                Datos personales
              </div>
              <TextField
                onChange={handleChange}
                name='name'
                id='input-name'
                label='Nombre'
                variant='outlined'
                type='text' />
              <TextField
                onChange={handleChange}
                name='surname'
                id='input-surname'
                label='Apellidos'
                variant='outlined'
                type='text' />
              <TextField
                onChange={handleChange}
                name='email'
                id='input-email'
                label='Email'
                variant='outlined'
                type='email' />
              <TextField
                onChange={handleChange}
                name='password'
                id='input-password'
                label='Contraseña'
                variant='outlined'
                type='password' />
              <TextField
                onChange={handleChange}
                name='confirmPassword'
                id='input-confirm-password'
                label='Repita la contraseña'
                variant='outlined'
                type='password' />
            </div>
            <div className="datos-empresa">
              <div className="title">
                Datos de la empresa
              </div>
              <TextField
                onChange={handleChange}
                name='nombreEmpresa'
                id='input-nombreEmpresa'
                label='Nombre de la empresa'
                variant='outlined'
                type='text' />
              <TextField
                onChange={handleChange}
                name='codigoCNAE'
                id='input-codigoCNAE'
                label='Código CNAE'
                variant='outlined'
                type='text' />
              <TextField
                onChange={handleChange}
                name='empresasCompetidoras'
                id='input-empresasCompetidoras'
                label='Empresas competidoras'
                variant='outlined'
                type='email' />
              <TextField
                onChange={handleChange}
                name='numeroEmpleadosActual'
                id='input-numeroEmpleadosActual'
                label='Número de empleados actual'
                variant='outlined'
                type='password' />
              <TextField
                onChange={handleChange}
                name='vidaEmpresa'
                id='input-vidaEmpresa'
                label='Vida de la empresa'
                variant='outlined'
                type='password' />
              <div className="note">
                * Los datos de la empresa se pueden proporcionar más adelante
              </div>
            </div>
          </div>
          <div className='acc-exists'>¿Ya tiene cuenta? Pulse <Link to='/login'>aquí</Link></div>
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
