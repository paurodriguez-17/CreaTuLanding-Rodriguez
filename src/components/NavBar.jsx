import React from 'react'
import CartWidget from './CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold text-pink fs-4" href="#">
                    Perruquería Spa & Shop
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Turnos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
