import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h2 className="auth__title">Iniciar Sesión</h2>
            <label className="auth__label">
                Correo
                <input type="text" name="email" autoComplete="off" className="auth__input"/>
            </label>
            <label className="auth__label">
                Contraseña
                <input type="password" name="password" autoComplete="off" className="auth__input"/>
            </label>
            <Link to="/auth/forgot-password" className="auth__forgot-pasword__link">
                ¿Olvidaste tu contraseña?
            </Link>
            <button className="button button--primary auth__forgot-password__login">
                Ingresar
            </button>
            <div className="auth__not-acount">
                <p className="auth__not-acount__text">
                    ¿No tienes cuenta?
                </p>
                <Link to="/auth/register" className="auth__not-account__link">
                    Registrate
                </Link>
            </div>
        </>
    )
}
