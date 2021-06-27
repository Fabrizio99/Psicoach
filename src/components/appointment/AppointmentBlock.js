import React, { useState } from 'react'
import { Card } from 'antd';
import moment from 'moment';
import { DateForm } from '../general/DateForm';
import { TimeForm } from '../general/TimeForm';
import { InputForm } from '../general/InputForm';
import { AppSettings } from '../../util/AppSeetings';

export const AppointmentBlock = ({list, onChange}) => {
    const [appointmentList, setAppointmentList] = useState(list)

    const disabledDate         = current => current && current < moment().endOf('day');
    const handleDisableHours   = a => [1, 2, 3]
    const handleDisableMinutes = b => {
        const minutes = []
        for (let i = 0; i < 60; i++) {
            minutes.push(i)
        }
        return minutes
    }
    const handleAppointment = (event, index, type) => {
        const {value} = event.target
        const tempList = [...appointmentList]
        tempList[index][type] = value

        if(type === 'startTime'){
            let [hour, minute] = tempList[index].startTime.split(':')
            hour = (Number(hour) === 23?0:Number(hour)+1).toString()
            tempList[index].finishTime = [hour,minute].join(':')
        }

        setAppointmentList(tempList)
        onChange([...list])
    }


    return (
        <Card title="Citas" className="personal">
            {
                list.map((app, index) =>(
                    <Card
                        type="inner" 
                        title={`Cita ${index+1}`} style={{marginBottom: 20}}
                        key={index}
                    >
                        <div className="row-3">
                            <DateForm
                                onChange={e => handleAppointment(e,index,'date')}
                                disabledDate={disabledDate}
                                label='Fecha'
                            />
                            <TimeForm
                                label='Hora Inicio'
                                onChange={e => handleAppointment(e,index, 'startTime')}
                                disabledHours={handleDisableHours}
                                disabledMinutes={handleDisableMinutes}
                            />
                            <InputForm
                                value={app.finishTime}
                                type={AppSettings.TYPE_INPUTS.TEXT}
                                label='Hora Fin'
                                disabled={true}
                            />
                        </div>
                    </Card>
                ))
            }
        </Card>
    )
}
