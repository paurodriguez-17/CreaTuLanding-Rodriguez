import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
            <div className="container">
                <Link to='/' className="navbar-brand fw-bold text-pink fs-4">
                    Perruquería Spa & Shop
                </Link>
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
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'}>Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/alimentos' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'}>Alimentos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/accesorios' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'}>Accesorios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/higiene' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'}>Higiene</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/category/juguetes' className={({ isActive }) => isActive ? 'nav-link active fw-bold' : 'nav-link'}>Juguetes</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar