import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeHeader.scss'
import { Button } from '@mui/material';

export default function WelcomeHeader() {
  return (
    <div className='welcome-header-container'>
      <div className="getting-started">
        <div className="getting-started-title">
          SV-Tech
        </div>
        <div className="getting-started-actions">
          <Link to="register"><button className='btn-home' id="btn-start">Comenzar</button></Link>
          <Link><button className='btn-home' id="btn-info">Más información</button></Link>
          <Link to="dashboard"><Button variant='filled' className='btn-home' id="btn-info">Tablas</Button></Link>
        </div>
      </div>
    </div>
  )
}
