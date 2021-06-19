import React, { useState } from "react";

export const Modal = () => {
  const [step, setStep] = useState(1);

  const handleStepProcess = () => {
    if (step === 3) {
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        {step === 1 && (
          <>
            <h2 className="modal__title">Reestablecer contraseña</h2>
            <label className="auth__label">
              Ingrese su correo
              <input
                type="email"
                name="email"
                autoComplete="off"
                className="auth__input"
              />
            </label>
            <button
              className="button button--primary"
              onClick={(_) => handleStepProcess()}
            >
              Reestablecer
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="modal__title">Reestablecer contraseña</h2>
            <label className="auth__label">
              Ingrese su palabra secreta
              <input type="text" autoComplete="off" className="auth__input" />
              <small className="help-phrase">Lugar favorito</small>
            </label>
            <button
              className="button button--primary"
              onClick={(_) => handleStepProcess()}
            >
              Enviar
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="modal__title">Reestablecer contraseña</h2>
            <label className="auth__label">
              Ingrese su nueva contraseña
              <input type="text" autoComplete="off" className="auth__input" />
            </label>
            <label className="auth__label">
              Confirme su nueva contraseña
              <input type="text" autoComplete="off" className="auth__input" />
            </label>
            <button
              className="button button--primary"
              onClick={(_) => handleStepProcess()}
            >
              Enviar
            </button>
          </>
        )}
      </div>
    </div>
  );
};
