import React from "react";
import './Navbar.scss'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">SV-Tech</div>
      <div className="main-nav-menu">
        <div className="main-nav-item">Precios</div>
        <div className="main-nav-item">Producto</div>
        <div className="main-nav-item">Contacto</div>
        <div className="main-nav-item">Sobre nosotros</div>
      </div>
      <Link to="login" style={{ textDecoration: 'none' }}>
        <div className="btn login-button">Iniciar sesión</div>
      </Link>
    </div>
  )
}