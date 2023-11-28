import { useState } from 'react'
import './VerificationEmail.scss'
import { useEffect } from 'react'

export const VerificationEmail = () => {

  const [test, setTest] = useState(true)
  const [finished, setFinished] = useState(false)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    // TODO: Actually sending the email and adding functionality to verify the email
    setTimeout(() => {
      setTest(false)
      setFinished(true)
      setError(true)
    }, 3000);
  }, [])

  const successIcon = (
    <div className={`check-icon ${test ? 'display-none' : ''}`}></div>
  )

  const errorIcon = (
    <div className={`error-icon ${test ? 'display-none' : ''}`}></div>
  )

  const errorMessage = (
    <>
      <p>
        Ha ocurrido un error a la hora de enviar el mensaje de confirmación. Por favor, para reintentarlo, haga click <a href='/'>aquí</a>.
      </p>
      <p style={{
        fontStyle: 'italic',
        fontSize: '.9rem'
      }}>
        * Si sigue teniendo problemas contacte con test@gmail.com
      </p>
    </>
  )

  const successMessage = (
    <>
      Email de confirmación enviado. Cierre esta pestaña de navegación y confirme su registro a través del link del correo electrónico.
    </>
  )

  return (
    <div className='verification-email-container'>
      <div
        className={`verification-spinner 
      ${error === undefined ? '' : error === false ? 'success' : 'error'}
      ${finished ? 'verification-spinner-finished' : ''}
      `
        }>{error ? errorIcon : successIcon}
      </div>
      <div className={`verification-text ${finished ? 'show' : ''}`}>
        {error ? errorMessage : successMessage}
      </div>
    </div>
  )
}