import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'
import { Modal } from '../general/Modal'

export const LoginScreen = () => {
    const {auth, loading} = useSelector(state=>state);
    const dispatch = useDispatch();
    const [form,handleInputChange] = useForm({
        email:    '',
        password: ''
    });
    const {email,password} = form;

    if(Object.keys(auth).length){
        return <Redirect to="/"/>
    }

    const handleLogIn = async(e)=>{
        dispatch(startLogin(email,password));
    }

    return (
        <>
            <h2 className="auth__title">Iniciar Sesión</h2>
            <label className="auth__label">
                Correo
                <input 
                    type="text" 
                    name="email" 
                    autoComplete="off" 
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
            </label>
            <label className="auth__label">
                Contraseña
                <input 
                    type="password" 
                    name="password" 
                    autoComplete="off" 
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
            </label>
            <Link to="/auth/forgot-password" className="auth__forgot-pasword__link">
                ¿Olvidaste tu contraseña?
            </Link>
            <button 
                className="button button--primary auth__forgot-password__login"
                onClick={handleLogIn}
                disabled={loading}
            >
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
            <Modal/>
        </>
    )
}
