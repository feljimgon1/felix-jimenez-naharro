import React from "react";
import './Introduction.scss'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Introduction() {
  return (
    <div className="introduction-container">
      <div className="introduction-moto">
        <div className="main-moto">Valora tu empresa desde casa</div>
        <div className="description">Consigue financiación proyectos en base a nuestros informes</div>
        <Link to="register" style={{ textDecoration: 'none', width: 'fit-content' }}>
          <div className="btn register-button">Regístrate</div>
        </Link>
      </div>
      <Link to="dashboard" style={{ textDecoration: 'none', width: 'fit-content', height: 'fit-content' }}>
        <Button className='btn centered' variant="contained">Dashboard</Button>
      </Link>
    </div>
  )
}