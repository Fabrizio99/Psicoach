import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="center-content navbar-content">
                <div className="navbar-content__left">
                    <Link to="/">
                        LOGO
                    </Link>
                    <div className="navbar__links-container">
                        <Link to="/us" className="navbar__link">
                            Nosotros
                        </Link>
                        <Link to="/talleres" className="navbar__link">
                            Talleres
                        </Link>
                        <Link to="/especialistas" className="navbar__link">
                            Especialistas
                        </Link>
                    </div>
                </div>
                <div className="navbar-content__right">
                    <Link to="/auth/login" className="navbar__user__link">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </nav>
    )
}
