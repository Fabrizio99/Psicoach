import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';
import { disableRedirect } from '../../actions/redirect';

export const RegisterScreen = () => {
    const {allowed, route} = useSelector(state=>state.redirect);
    const dispatch = useDispatch();
    const [form,handleInputChange] = useForm({
        email    : '',
        password : '',
        name     : ''
    });

    const {email,password,name} = form;

    const handleRegister = async()=>{
        dispatch(startRegister(email,password,name));
    }
    
    if(allowed){
        dispatch(disableRedirect())
        return <Redirect to={route}/>
    }

    return (
        <>
            <h2 className="auth__title">Regístrate</h2>
            <label className="auth__label">
                Nombre
                <input 
                    type="text" 
                    name="name" 
                    autoComplete="off" 
                    className="auth__input" 
                    onChange={handleInputChange}
                />
            </label>
            <label className="auth__label">
                Correo
                <input 
                    type="text" 
                    name="email" 
                    autoComplete="off" 
                    className="auth__input"
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
                    onChange={handleInputChange}
                />
            </label>
            <button 
                className="button button--primary auth__forgot-password__login"
                onClick={handleRegister}
            >
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
