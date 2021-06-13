import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Alerts } from '../../helpers/Alerts';
import { HttpRequest } from '../../helpers/HttpRequest';
import { useForm } from '../../hooks/useForm';
import { Services } from '../../util/AppSeetings';

export const RegisterScreen = () => {
    const history = useHistory();
    const [form,handleInputChange] = useForm({
        email    : '',
        password : '',
        name     : ''
    });

    const {email,password,name} = form;

    const handleRegister = async()=>{
        const body = {
            email,
            password
        }
        name.trim() && (body.name = name);
        
        try {
            const response = await HttpRequest.POST(Services.REGISTER,body);
            console.log('respuesta register: ',response);
            
            if(response.errors){
                Alerts.showErrorMessage(response.errors[0]?.message || '');
                return;
            }
            Alerts.showSuccessMessage(response.message);
            history.push('/auth');
        } catch (error) {
            console.log(error)
        }
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
