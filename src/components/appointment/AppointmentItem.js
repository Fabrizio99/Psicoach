import React, { useState } from 'react'
import { Card } from 'antd'
import { DateForm } from '../general/DateForm';
import { TimeForm } from '../general/TimeForm';
import { InputForm } from '../general/InputForm';
import { AppSettings, Services } from '../../util/AppSeetings'
import moment from 'moment';
import { handleWebServiceResponse } from '../../helpers/HttpRequest';
import { useSelector } from 'react-redux';

export const AppointmentItem = ({item, index, onChange}) => {
    const {token}                                 = useSelector(state=>state.auth);
    const [appointment, setAppointment]           = useState(item)
    const [disableStartDate, setDisableStartDate] = useState(true)
    const [disableButton, setDisableButton]       = useState(false)
    const [confirmMessage, setConfirmMessage]     = useState({show: false, ok: false})
    const [hours, setHours]                       = useState([])


    const handleAppointment = (event, type) => {
        setConfirmMessage({show: false, ok: false})
        const {value} = event.target
        const tempAppointment = {...appointment}
        tempAppointment[type] = value

        resetForm()
        if(type === 'startTime'){
            if(!tempAppointment[type]){
                tempAppointment.finishTime = ''
                setAppointment(tempAppointment)
                return;
            }
            let [hour] = tempAppointment.startTime.split(':')
            // hour = (Number(hour) === 23?0:Number(hour)+1).toString()
            tempAppointment.finishTime = [hour,'45'].join(':')
        }

        if(type === 'date'){
            if(!tempAppointment[type]){
                setDisableStartDate(true)
                tempAppointment.startTime = ''
                tempAppointment.finishTime = ''
                setAppointment(tempAppointment)
                return;
            }
            setDisableStartDate(!value)
            const id = moment(tempAppointment[type]).day()
            const weekDay = AppSettings.WEEK_DAYS.find(w => w.id === id)?.name
            setHours(JSON.parse(localStorage.getItem(AppSettings.LOCAL_STORAGE.SCHEDULE))[weekDay])
            tempAppointment.startTime = ''
            tempAppointment.finishTime = ''
        }

        setAppointment(tempAppointment)
    }

    const disabledDate         = current => (current && current < moment().endOf('day')) || current.day() === 0;
    
    const handleDisableHours   = a => {
        const unavailableHours = []
        for (let i = 0; i < 24; i++) {
            if(!hours){
                unavailableHours.push(i)
            }else{
                const hour = hours.find(h => Number(h.split(':')[0]) === i)
                hour || unavailableHours.push(i)
            }
        }

        return unavailableHours
    }
    const handleDisableMinutes = b => {
        const minutes = []
        for (let i = 0; i < 60; i++) {
            minutes.push(i)
        }
        return minutes
    }

    const validForm = _ => appointment.date && appointment.startTime && appointment.finishTime

    const checkCrossing = async _ => {
        setDisableButton(true)
        setConfirmMessage({show: false, ok: false})
        const params = [
            `date=${appointment.date}`,
            `start_time=${appointment.startTime}`,
            `end_time=${appointment.finishTime}`,
        ]

        const response = await handleWebServiceResponse(
            AppSettings.HTTP_VERBS.GET,
            `${Services.CROSSING}?${params.join('&')}`,
            token
        )

        setConfirmMessage({show: true, ok: response})
        setDisableButton(false)
        if(response){
            onChange(appointment)
        }else{
            resetForm()
        }
    }

    const resetForm = _ => {
        onChange({
            date:       '',
            startTime:  '',
            finishTime: '',
        })
    }

    return (
        <Card
            type="inner" 
            title={`Cita ${index}`} style={{marginBottom: 20}}
            key={index}
        >
            <div className="row-4">
                <DateForm
                    onChange={e => handleAppointment(e,'date')}
                    disabledDate={disabledDate}
                    label='Fecha'
                />
                <TimeForm
                    label='Hora Inicio'
                    value={appointment.startTime}
                    onChange={e => handleAppointment(e,'startTime')}
                    disabledHours={handleDisableHours}
                    disabledMinutes={handleDisableMinutes}
                    disabled={disableStartDate}
                />
                <InputForm
                    value={appointment.finishTime}
                    type={AppSettings.TYPE_INPUTS.TEXT}
                    label='Hora Fin'
                    disabled={true}
                />
                <button className="button button--date-time" disabled={!validForm() || disableButton} onClick={checkCrossing}>
                    Validar
                </button>
            </div>
            {
                confirmMessage.show && (
                    <p className={confirmMessage.ok?'correct-message':'error-message'}>{confirmMessage.ok?'Listo!':'Ocurrió un error'}</p>
                )
            }
        </Card>
    )
}
