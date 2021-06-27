import React, { useEffect, useState } from "react";
import {InputForm} from '../general/InputForm'
import { useForm } from '../../hooks/useForm'
import { recoverPassword } from "../../helpers/resetPassword";
import PropTypes from 'prop-types';
import { Alerts } from "../../helpers/Alerts";
import { ModalManager } from "../../helpers/Modal";
import { AppSettings } from "../../util/AppSeetings";

export const Modal = ({id}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false)
  const [helpPhrase, setHelpPhrase] = useState('')
  const [form, handleInputChange, reset] = useForm({
    email:    '',
    word:    '',
    password: '',
    confirmPassword: ''
  });
  const {email, word, password, confirmPassword} = form;

  const handleStepProcess = async () => {
    setLoading(true)
    let form = {}
    switch (currentStep) {
      case 1:
        form.email = email;
        break;
      case 2:
        form.email = email;
        form.response = word
        break;
      case 3:
        form.email = email;
        form.password = password;
        break;
      default:
        break;
    }

    const response = await recoverPassword(currentStep,form)
    const phrase = response?.help_phrase
    setHelpPhrase(phrase || '')

    setLoading(false);

    if(response){
      if(currentStep<3){
        setCurrentStep(currentStep + 1);
        return
      }

      resetComponent()
      ModalManager.closeModal(id);
      Alerts.showSuccessMessage('Se cambio de manera exitosa')
    }
  };

  const resetComponent = _ => {
    reset();
    setCurrentStep(1);
    setHelpPhrase('');
    setLoading(false)
  }

  useEffect(() => {
    ModalManager.onClose( _ =>{
      resetComponent()
    })
  }, [])

  const formData = [
    {
      step: 1,
      inputs: [
        {
          label: 'Ingrese su correo',
          name: 'email',
          type: AppSettings.TYPE_INPUTS.EMAIL,
          value: email
        }
      ],
      textButton: 'Enviar'
    },
    {
      step: 2,
      inputs: [
        {
          label: 'Ingrese su palabra secreta',
          name: 'word',
          type: AppSettings.TYPE_INPUTS.TEXT,
          value: word
        }
      ],
      textButton: 'Enviar'
    },
    {
      step: 3,
      inputs: [
        {
          label: 'Ingrese su nueva contraseña',
          name: 'password',
          type: AppSettings.TYPE_INPUTS.PASSWORD,
          value: password
        },
        {
          label: 'Confirme su nueva contraseña',
          name: 'confirmPassword',
          type: AppSettings.TYPE_INPUTS.PASSWORD,
          value: confirmPassword
        }
      ],
      textButton: 'Reestablecer'
    }
  ]

  const currentForm = formData.find(form => form.step === currentStep)

  const validForm = _ => {
    return currentForm.inputs.every(input => input.value) && (currentForm.step === 3?password === confirmPassword:true)
  }

  return (
    <div className="modal animate__animated animate__faster" id={id}>
      <div className="modal__content animate__animated animate__faster">
        <h2 className="modal__title">Reestablecer contraseña</h2>
        {
          currentForm.inputs.map((input,index) => (
            <InputForm
              onChange={handleInputChange}
              value={input.value}
              name={input.name}
              type={input.type}
              label={input.label}
              key={index}
            />
          ))
        }
        {
          helpPhrase && (
            <small className="modal__phrase">Frase de ayuda: {helpPhrase}</small>
          )
        }
        <button
          className="button button--primary"
          disabled={!validForm() || loading}
          onClick={(_) => handleStepProcess()}
        >
          {currentForm.textButton}
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired
}