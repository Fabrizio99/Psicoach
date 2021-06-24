import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { Input } from 'antd';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'
import { Modal } from '../general/Modal'
import { ModalManager } from '../../helpers/Modal';

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

    const validForm = _ => {
        return email?.trim() && password?.trim()
    }

    const handleOpenModal = _ => {
        ModalManager.openModal('reestablecer')
    }

    return (
        <>
            <h2 className="auth__title">Iniciar Sesión</h2>
            <label className="auth__label">
                Correo
                <Input className="auth__input" name="email" onChange={handleInputChange} type="email" autoComplete="off" value={email}/>
            </label>
            <label className="auth__label">
                Contraseña
                <Input className="auth__input" name="password" onChange={handleInputChange} type="password" autoComplete="off" value={password}/>
            </label>
            <div className="auth__forgot-pasword__link" onClick={handleOpenModal}>
                ¿Olvidaste tu contraseña?
            </div>
            <button 
                className="button button--primary auth__forgot-password__login"
                onClick={handleLogIn}
                disabled={loading || !validForm()}
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
            <Modal id="reestablecer"/>
        </>
    )
}
