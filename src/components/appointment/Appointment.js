import React from 'react';
import { useForm } from '../../hooks/useForm';
import { InputForm } from '../general/InputForm';
import { SelectForm } from '../general/SelectForm';
import { DateForm } from '../general/DateForm';
import { TimeForm } from '../general/TimeForm';
import { Card } from 'antd';
import { Tag } from 'antd';

import moment from 'moment';
import '../../styles/components/appointment/_appointment.scss'



export const Appointment = () => {

    const [form,handleInputChange] = useForm({
        name: '',
        lastName: '',
        age: '',
        phone: '',
        typeDocument: '',
        document: '',
        email: '',
        topic: '',
        date: '',
        time: ''
    });

    const {name, lastName, age, phone, document, email} = form;


    function disabledDate(current) {
        return current && current < moment().endOf('day');
    }
    function handleDisableHours(a){
        return [1, 2, 3]
    }
    function handleDisableMinutes(b) {
        const minutes = []
        for (let i = 0; i < 60; i++) {
            minutes.push(i)
        }
        return minutes
    }

    return (
        <div className="container center-content">
            <h2 className="container__title">Compra de paquete</h2>
            <form className="form">
                <Card title="Datos Personales" style={{marginBottom: 50}} className="personal">
                    
                    <div className="row">
                        <InputForm
                            value={'Luxury'}
                            type='text'
                            label='Paquete'
                            disabled={true}
                        />
                        <InputForm
                            value={'380.00'}
                            type='text'
                            label='Precio'
                            disabled={true}
                        />
                    </div>
                    <div className="row">
                        <InputForm
                            onChange={handleInputChange}
                            value={name}
                            name='name'
                            type='text'
                            label='Nombres'
                        />
                        <InputForm
                            onChange={handleInputChange}
                            value={lastName}
                            name='lastName'
                            type='text'
                            label='Apellidos'
                        />
                    </div>
                    <div className="row">
                        <InputForm
                            onChange={handleInputChange}
                            value={age}
                            name='age'
                            type='text'
                            label='Edad'
                        />
                        <InputForm
                            onChange={handleInputChange}
                            value={phone}
                            name='phone'
                            type='tel'
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
                            type='text'
                            label='N. Documento'
                        />
                    </div>
                    <div className="row">
                        <div>
                            <InputForm
                                onChange={handleInputChange}
                                value={email}
                                name='email'
                                type='email'
                                label='Correo Electrónico'
                            />
                            <Tag closable>
                                fabrizio.condori.guzman@gmail.com
                            </Tag>
                            <Tag closable>
                                fabrizio@gmail.com
                            </Tag>
                            <Tag closable>
                                fabrizio@gmail.com
                            </Tag>
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
                </Card>


                <Card title="Citas" className="personal">
                    <Card type="inner" title="Cita 1" style={{marginBottom: 20}}>
                        <div className="row">
                            <DateForm
                                onChange={handleInputChange}
                                name='date'
                                label='Fecha'
                                disabledDate={disabledDate}
                            />
                            <TimeForm
                                onChange={handleInputChange}
                                name='time'
                                label='Hora'
                                disabledHours={handleDisableHours}
                                disabledMinutes={handleDisableMinutes}
                            />
                        </div>    
                    </Card>
                    <Card type="inner" title="Cita 1" style={{marginBottom: 20}}>
                        <div className="row">
                            <DateForm
                                onChange={handleInputChange}
                                name='date'
                                label='Fecha'
                                disabledDate={disabledDate}
                            />
                            <TimeForm
                                onChange={handleInputChange}
                                name='time'
                                label='Hora'
                                disabledHours={handleDisableHours}
                                disabledMinutes={handleDisableMinutes}
                            />
                        </div>    
                    </Card>
                    <Card type="inner" title="Cita 1" style={{marginBottom: 20}}>
                        <div className="row">
                            <DateForm
                                onChange={handleInputChange}
                                name='date'
                                label='Fecha'
                                disabledDate={disabledDate}
                            />
                            <TimeForm
                                onChange={handleInputChange}
                                name='time'
                                label='Hora'
                                disabledHours={handleDisableHours}
                                disabledMinutes={handleDisableMinutes}
                            />
                        </div>    
                    </Card>
                    <Card type="inner" title="Cita 1" style={{marginBottom: 20}}>
                        <div className="row">
                            <DateForm
                                onChange={handleInputChange}
                                name='date'
                                label='Fecha'
                                disabledDate={disabledDate}
                            />
                            <TimeForm
                                onChange={handleInputChange}
                                name='time'
                                label='Hora'
                                disabledHours={handleDisableHours}
                                disabledMinutes={handleDisableMinutes}
                            />
                        </div>    
                    </Card>
                </Card>
                <button 
                    className="button button--primary"
                >
                    Registrar
                </button>
            </form>
        </div>
    )
}
