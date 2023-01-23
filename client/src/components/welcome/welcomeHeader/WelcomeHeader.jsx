import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomeHeader.scss'

export default function WelcomeHeader() {
  return (
    <div className='welcome-header-container'>
      <div className="getting-started">
        <div className="getting-started-title">
          SV-Tech
        </div>
        <div className="getting-started-actions">
          <Link to="register"><button className='btn' id="btn-start">Comenzar</button></Link>
          <Link><button className='btn' id="btn-info">Más información</button></Link>
        </div>
      </div>
    </div>
  )
}
