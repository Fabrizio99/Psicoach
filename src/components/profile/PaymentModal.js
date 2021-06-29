import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ButtonFile } from "../general/ButtonFile";
import { handleWebServiceResponse } from "../../helpers/HttpRequest";
import { AppSettings, Services } from "../../util/AppSeetings";
import { useSelector } from "react-redux";
import { ModalManager } from "../../helpers/Modal";

export const PaymentModal = ({ id, onComplete, payment }) => {
  const [file, setFile] = useState(undefined);
  const {token}         = useSelector(state=>state.auth);

  const handleClick = async() => {
    const response = await handleWebServiceResponse(
        AppSettings.HTTP_VERBS.POST,
        Services.PAYMENT_APPOINTMENT,
        {
            meeting_id: String(payment)
        },
        _ => null,
        _ => null,
        token
    )
    if(response){
        ModalManager.closeModal(id)
        onComplete()
    }
  }

  return (
    <div className="modal animate__animated animate__faster" id={id}>
      <div className="modal__content animate__animated animate__faster">
        <h2 className="modal__title">Pago</h2>
        <ButtonFile 
            label="Foto de boleta de pago" 
            onChange={f => setFile(f)}
            value={file}
        />
        <button className="button button--primary" disabled={!file} onClick={handleClick}>Enviar</button>
      </div>
    </div>
  );
};

PaymentModal.propTypes = {
  id: PropTypes.string.isRequired,
};
