import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Introduction from '../../../components/home/introduction/Introduction'
import './Home.scss'

export default function Home() {
  return (
    // <div className='welcome-header-container'>
    //   <div className="getting-started">
    //     <Link to="dashboard" style={{ textDecoration: 'none' }}><Button variant='contained' className='btn-home' id="btn-info">Tablas</Button></Link>
    //     <h1>
    //       SV-Tech
    //     </h1>
    //     <div className="getting-started-actions">
    //       <Link to="register"><button className='btn-home' id="btn-start">Comenzar</button></Link>
    //       <Link><button className='btn-home' id="btn-info">Más información</button></Link>
    //     </div>
    //   </div>
    // </div>
    <div className='home-container'>
      <Navbar />
      <Introduction />
      {/* Intro */}
      {/* Sell the product */}
      {/* Opinions/About us */}
      {/* Footer */}
    </div>
  )
}
