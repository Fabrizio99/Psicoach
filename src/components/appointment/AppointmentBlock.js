import React, { useState } from 'react'
import { Card } from 'antd';
import { AppointmentItem } from './AppointmentItem'

export const AppointmentBlock = ({list, onChange}) => {
    const [appointmentList, setAppointmentList] = useState(list)

    const handleAppointment = (appointment, index) => {
        const tempList = [...appointmentList]
        tempList[index] = appointment
        setAppointmentList(tempList)
        onChange([...tempList])
    }


    return (
        <Card title="Citas" className="personal">
            {
                list.map((app, index) =>(
                    <AppointmentItem
                        item={app}
                        index={index+1}
                        key={index}
                        onChange={(app) => handleAppointment(app,index)}
                    />
                ))
            }
        </Card>
    )
}
