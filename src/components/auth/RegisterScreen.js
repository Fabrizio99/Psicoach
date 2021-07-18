import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';

import { Input } from 'antd';

export const RegisterScreen = () => {
    const {redirect: {allowed, route},loading} = useSelector(state=>state);
    const dispatch = useDispatch();
    const [form,handleInputChange] = useForm({
        email    : '',
        password : '',
        name     : '',
        question : '',
        answer   : '',
        phrase   : ''
    });

    const {email, password, name, question, answer, phrase} = form;

    const handleRegister = async()=>{
        dispatch(startRegister(email,password,name, question, answer, phrase));
    }

    const validForm = _ => {
        return email?.trim() && password?.trim() && question?.trim() && answer?.trim() && phrase?.trim()
    }

    if(allowed){
        return <Redirect to={route}/>
    }

    return (
        <>
            <h2 className="auth__title">Regístrate</h2>
            <label className="auth__label">
                Nombre
                <Input className="auth__input" name="name" onChange={handleInputChange} type="text"/>
            </label>
            <label className="auth__label">
                Correo *
                <Input className="auth__input" name="email" onChange={handleInputChange} type="email"/>
            </label>
            <label className="auth__label">
                Contraseña *
                <Input className="auth__input" name="password" onChange={handleInputChange} type="password"/>
            </label>
            <label className="auth__label">
                Pregunta Secreta *
                <Input className="auth__input" name="question" onChange={handleInputChange} type="text"/>
                <p className="input__help">Ej. ¿Animal favorito?</p>
            </label>
            <label className="auth__label">
                Respuesta Secreta *
                <Input className="auth__input" name="answer" onChange={handleInputChange} type="text"/>
                <p className="input__help">Ej. Perro</p>
            </label>
            <label className="auth__label">
                Frase de ayuda *
                <Input className="auth__input" name="phrase" onChange={handleInputChange} type="text"/>
                <p className="input__help">Ej. Cuadrúpedo</p> 
            </label>
            <button 
                className="button button--primary auth__forgot-password__login"
                onClick={handleRegister}
                disabled={loading || !validForm()}
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
