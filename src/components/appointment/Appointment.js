import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Tag, Modal, Button } from 'antd';

import '../../styles/components/appointment/_appointment.scss'
import { useForm } from '../../hooks/useForm';
import { AppSettings, Services } from '../../util/AppSeetings';
import { InputForm } from '../general/InputForm';
import { SelectForm } from '../general/SelectForm';
import { AppointmentBlock } from './AppointmentBlock';
import { ButtonFile } from '../general/ButtonFile';
import { Validators } from '../../helpers/Validators';
import { handleWebServiceResponse } from '../../helpers/HttpRequest';
import { Alerts } from '../../helpers/Alerts';
import { images } from '../../helpers/getImages';



export const Appointment = () => {
    const { id }         = useParams();
    const {token}        = useSelector(state=>state.auth);
    const history        = useHistory();
    const select         = JSON.parse(localStorage.getItem(AppSettings.LOCAL_STORAGE.SELECT))
    const {products}     = select
    const currentProduct = products.find(p => p.id === Number(id))
    
    const [form,handleInputChange] = useForm({
        name:         '',
        lastName:     '',
        age:          '',
        gender:       '',
        phone:        '',
        typeDocument: '',
        document:     '',
        email:        '',
        topic:        '',
        date:         '',
        time:         '',
        description:  ''
    });
    const {name, lastName, gender, age, phone, typeDocument, document, email, topic, description} = form;
    const appontimentQuantity                    = Number(currentProduct.cant_session);
    const [disableButton, setDisableButton]      = useState(false)
    const [appointmentList, setAppointmentList]  = useState([])
    const [emailList, setEmailList]              = useState([]);
    const [file, setFile]                        = useState();
    const [step, setStep]                        = useState(0);
    const [isModalVisible, setIsModalVisible]    = useState(false);


    useEffect(() => {
        const tempList = [];
        for (let i = 0; i < appontimentQuantity; i++) {
            tempList.push({
                date      : '',
                startTime : '',
                finishTime: '',
            })
        }
        setAppointmentList([...appointmentList, ...tempList])
    }, [])


    const handleAddEmail = _ => {
        const resetEmail = _ => handleInputChange({target: {name: 'email', value: ''}})

        if(emailList.includes(email)){
            resetEmail()
            return
        }

        const list = [...emailList, email]
        setEmailList(list)
        resetEmail()
    }
    const handleDeleteEmail = (_email) => {
        const list = emailList.filter(e => e !== _email)
        setEmailList(list)
    }
    const handleAppointmentList = (newList) => setAppointmentList(newList)

    const validForm = _ => {
        const validatePersonalData = !!(name.trim() && lastName.trim() && gender && Validators.age(age) && Validators.phone(phone) && typeDocument && document.trim() && document.length === 8 && topic && description.trim());
        const validateEmailList    = emailList.length>0
        const validateFile         = !!(age && age<18)?file:true;
        const validateAppointments = appointmentList.every(app => app.date.trim() && app.startTime.trim());
        return validatePersonalData && validateEmailList && validateFile && validateAppointments
    }

    const registerAppointment = async _ => {
        setDisableButton(true)
        const body = {
            name            : name,
            surname         : lastName,
            age             : age,
            document_id     : typeDocument,
            document_number : document,
            product_id      : id,
            gender_id       : gender,
            description     : description,
            disease         : select.diseases_type.find(d => d.id === topic)?.name,
            date            : appointmentList.map(a => a.date),
            start_time      : appointmentList.map(a => a.startTime),
            end_time        : appointmentList.map(a => a.finishTime),
            phone           : phone,
            emails          : emailList
        }
        const response = await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.POST,
            Services.REGISTER_APPOINTMENT,
            body,
            _ => null,
            _ => null,
            token
        )

        setDisableButton(false)

        if(response){
            Alerts.showSuccessMessage('Registrado correctamente', false)
            .then( resp => {
                setStep(1)
                // history.push('/profile')
            })
        }
    }
    const showTermsConditions = _ => {
        setIsModalVisible(true);
    }
    const closeTermsConditions = _ => {
        setIsModalVisible(false);
    }

    return (
        <div className="container center-content">
            <h2 className="container__title">Reserva de paquete</h2>
            {
                step === 0 && (
                    <form className="form" onSubmit={e => e.preventDefault()}>
                        <Card title="Datos Personales" style={{marginBottom: 50}} className="personal">                    
                            <div className="row">
                                <InputForm
                                    value={currentProduct.name}
                                    type={AppSettings.TYPE_INPUTS.TEXT}
                                    label='Paquete'
                                    disabled={true}
                                />
                                <InputForm
                                    value={currentProduct.price}
                                    type={AppSettings.TYPE_INPUTS.TEXT}
                                    label='Precio'
                                    disabled={true}
                                />
                            </div>
                            <div className="row">
                                <InputForm
                                    onChange={handleInputChange}
                                    value={name}
                                    name='name'
                                    type={AppSettings.TYPE_INPUTS.TEXT}
                                    label='Nombres'
                                />
                                <InputForm
                                    onChange={handleInputChange}
                                    value={lastName}
                                    name='lastName'
                                    type={AppSettings.TYPE_INPUTS.TEXT}
                                    label='Apellidos'
                                />
                            </div>
                            <div className="row-3">
                                <SelectForm
                                    onChange={handleInputChange}
                                    label='Género'
                                    name="gender"
                                    placeholder="Seleccione género"
                                    options={select.genders.filter(g => g.name !== 'Sin definir')}
                                />
                                <InputForm
                                    onChange={handleInputChange}
                                    value={age}
                                    name='age'
                                    type={AppSettings.TYPE_INPUTS.NUMBER}
                                    typeNumber={AppSettings.TYPE_NUMBERS.AGE}
                                    label='Edad'
                                />
                                <InputForm
                                    onChange={handleInputChange}
                                    value={phone}
                                    name='phone'
                                    type={AppSettings.TYPE_INPUTS.TEL}
                                    label='Teléfono'
                                />
                            </div>
                            <div className="row">
                                <SelectForm
                                    onChange={handleInputChange}
                                    label='Tipo de documento'
                                    name="typeDocument"
                                    placeholder="Seleccione tipo de documento"
                                    options={select.document_type}
                                />
                                <InputForm
                                    onChange={handleInputChange}
                                    value={document}
                                    name='document'
                                    type={AppSettings.TYPE_INPUTS.NUMBER}
                                    label='N. Documento'
                                />
                            </div>
                            <div className="row">
                                <div>
                                    <InputForm
                                        onChange={handleInputChange}
                                        value={email}
                                        name='email'
                                        type={AppSettings.TYPE_INPUTS.TEXT}
                                        label='Correo Electrónico (De enter cada vez que agrega un correo)'
                                        onEnter={handleAddEmail}
                                    />
                                    {
                                        emailList.map( (el, index) => (
                                            <Tag closable key={el} onClose={_ => handleDeleteEmail(el)}>
                                                {el}
                                            </Tag>
                                        ))
                                    }
                                </div>
                                <SelectForm
                                    onChange={handleInputChange}
                                    label='Tema a tratar'
                                    name="topic"
                                    placeholder="Seleccione el tema a tratar"
                                    options={select.diseases_type}
                                />
                            </div>
                            <div>
                                <InputForm
                                    onChange={handleInputChange}
                                    value={description}
                                    name='description'
                                    type={AppSettings.TYPE_INPUTS.TEXT}
                                    label='Descripción'
                                />
                            </div>
                            {
                                age && Number(age) < 18 && (
                                    <div className="row">
                                        <ButtonFile
                                            label='Consentimiento del tutor'
                                            onChange={f => setFile(f)}
                                        />
                                    </div>
                                )
                            }
                        </Card>
                        
                        {
                            appointmentList.length > 0 && (
                                <AppointmentBlock
                                    list={appointmentList}
                                    onChange={handleAppointmentList}
                                />
                            )
                        }

                        <div>
                            <p className="terms" onClick={showTermsConditions}>Términos y condiciones</p>
                            <Modal 
                                title="Términos y Condiciones" 
                                visible={isModalVisible} 
                                onOk={closeTermsConditions} 
                                onCancel={closeTermsConditions}
                                footer={[
                                    <Button key="submit" type="primary" onClick={closeTermsConditions}>
                                      Aceptar
                                    </Button>,
                                ]}
                            >
                                <p>- Si se ausenta a su sesión, no habrá opción a recuperarlo.</p>
                                <p>- Se podrá cancelar o reprogramar la sesión con 24 horas de anticipación.</p>
                                <p>- Cada sesión se realiza 1 vez por semana a menos que el especialista modifique la frecuencia de las sesiones con previo aviso.</p>
                            </Modal>
                        </div>
                        <button 
                            className="button button--primary"
                            disabled={!validForm() || disableButton}
                            onClick={registerAppointment}
                        >
                            Registrar
                        </button>
                    </form>
                )
            }
            {
                step === 1 && (
                    <>
                        <p className="payment__description">Buena! Se registro tu reserva, puedes pagar por los siguientes medios: </p>
                        <div className="payment__account">
                            <h2>Yape</h2>
                            <img src={images('./qr_image.png').default} alt="qr"/>
                        </div>
                        <div className="payment__account">
                            <h2>BCP</h2>
                            <p>N° de cuenta: <strong>183-23412323-9-23</strong></p>
                        </div>
                    </>
                )
            }
        </div>
    )
}
