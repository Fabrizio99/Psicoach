import React from 'react'
import { TimePicker } from 'antd';

export const TimeForm = ({onChange, name, label, disabledHours,disabledMinutes}) => {
    {/* <TimePicker defaultValue={moment('12:08', 'HH:mm')} format='HH:mm' showNow={false} inputReadOnly={true} disabledHours={handleDisableHours}/> */}

    const handleChange = (time, timeString) => {
        onChange({
            target: {
                name,
                value: timeString
            }
        })
    }

    return (
        <label className="input__label">
            {label}
            <TimePicker 
                format='HH:mm' 
                showNow={false} 
                inputReadOnly={true} 
                onChange={handleChange} 
                disabledHours={disabledHours} 
                disabledMinutes={disabledMinutes} />
        </label>
    )
}