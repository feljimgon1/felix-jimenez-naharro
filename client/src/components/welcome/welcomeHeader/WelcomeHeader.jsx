import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeHeader.scss'
import { Button } from '@mui/material';

export default function WelcomeHeader() {
  return (
    <div className='welcome-header-container'>
      <div className="getting-started">
        <Link to="dashboard" style={{ textDecoration: 'none' }}><Button variant='contained' className='btn-home' id="btn-info">Tablas</Button></Link>
        <div className="getting-started-title">
          SV-Tech
        </div>
        <div className="getting-started-actions">
          <Link to="register"><button className='btn-home' id="btn-start">Comenzar</button></Link>
          <Link><button className='btn-home' id="btn-info">Más información</button></Link>
        </div>
      </div>
    </div>
  )
}
