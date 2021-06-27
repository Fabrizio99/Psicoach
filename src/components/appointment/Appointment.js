import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Tag } from 'antd';
import { useForm } from '../../hooks/useForm';
import { AppSettings } from '../../util/AppSeetings';
import { InputForm } from '../general/InputForm';
import { SelectForm } from '../general/SelectForm';
import { AppointmentBlock } from './AppointmentBlock';
import { ButtonFile } from '../general/ButtonFile';
import '../../styles/components/appointment/_appointment.scss'
import { Validators } from '../../helpers/Validators';



export const Appointment = () => {
    const { id } = useParams();
    const [form,handleInputChange] = useForm({
        name: '',
        lastName: '',
        age: '',
        gender: '',
        phone: '',
        typeDocument: '',
        document: '',
        email: '',
        topic: '',
        date: '',
        time: ''
    });
    const {name, lastName, gender, age, phone, typeDocument, document, email, topic} = form;
    const [emailList, setEmailList] = useState([]);
    const [file, setFile] = useState(undefined);
    const appontimentQuantity = 2;
    const [appointmentList, setAppointmentList] = useState([])

    useEffect(() => {
        const tempList = []
        for (let i = 0; i < appontimentQuantity; i++) {
            tempList.push({
                date: '',
                startTime: '',
                finishTime: '',
            })
        }
        setAppointmentList([...appointmentList, ...tempList])
    }, [])


    const handleAddEmail       = _ => {
        const resetEmail = _ => handleInputChange({target: {name: 'email', value: ''}})

        if(emailList.includes(email)){
            resetEmail()
            return
        }

        const list = [...emailList, email]
        setEmailList(list)
        resetEmail()
    }
    const handleDeleteEmail    = (_email) => {
        const list = emailList.filter(e => e !== _email)
        setEmailList(list)
    }
    const handleAppointmentList = (newList) => setAppointmentList(newList)

    const validForm = _ => {
        const validatePersonalData = !!(name.trim() && lastName.trim() && gender && Validators.age(age) && Validators.phone(phone) && typeDocument && document.trim() && document.length === 8 && topic);
        const validateEmailList    = emailList.length>0
        const validateFile         = !!(age && age<18)?file:true;
        const validateAppointments = appointmentList.every(app => app.date.trim() && app.startTime.trim());

        console.log('----------------------------------------------')
        console.log('validatePersonalData: ', validatePersonalData)
        console.log('validateEmailList: ', validateEmailList)
        console.log('validateFile: ', validateFile)
        console.log('validateAppointments: ', validateAppointments)
        return validatePersonalData && validateEmailList && validateFile && validateAppointments
    }

    return (
        <div className="container center-content">
            <h2 className="container__title">Compra de paquete</h2>
            <form className="form" onSubmit={e => e.preventDefault()}>
                <Card title="Datos Personales" style={{marginBottom: 50}} className="personal">                    
                    <div className="row">
                        <InputForm
                            value={'Luxury'}
                            type={AppSettings.TYPE_INPUTS.TEXT}
                            label='Paquete'
                            disabled={true}
                        />
                        <InputForm
                            value={'380.00'}
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
                            options={[
                                {
                                    name: 'Masculino',
                                    value: 0
                                },
                                {
                                    name: 'Femenino',
                                    value: 1
                                },
                                {
                                    name: 'Otros',
                                    value: 2
                                }
                            ]}
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
                            options={[
                                {
                                    name: 'DNI',
                                    value: 0
                                },
                                {
                                    name: 'C. E.',
                                    value: 1
                                }
                            ]}
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
                            options={[
                                {
                                    name: 'Ansiedad',
                                    value: 0
                                },
                                {
                                    name: 'Depresión',
                                    value: 1
                                }
                            ]}
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

                <button 
                    className="button button--primary"
                    disabled={!validForm()}
                >
                    Registrar
                </button>
            </form>
        </div>
    )
}
