import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h2 className="auth__title">Regístrate</h2>
            <label className="auth__label">
                Nombre
                <input type="text" name="name" autoComplete="off" className="auth__input" autoComplete="off"/>
            </label>
            <label className="auth__label">
                Correo
                <input type="text" name="email" autoComplete="off" className="auth__input"/>
            </label>
            <label className="auth__label">
                Contraseña
                <input type="password" name="password" autoComplete="off" className="auth__input"/>
            </label>
            <button className="button button--primary auth__forgot-password__login">
                Regístrate
            </button>
            <div className="auth__not-acount">
                <p className="auth__not-acount__text">
                    ¿Ya tienes una cuenta?
                </p>
                <Link to="/auth/login" className="auth__not-account__link">
                    Inicia sesión
                </Link>
            </div>
        </>
    )
}
