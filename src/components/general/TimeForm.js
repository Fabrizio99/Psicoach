import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';

export const TimeForm = ({onChange, name, label, disabledHours,disabledMinutes, disabled = false, value}) => {
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
                disabled={disabled}
                value={value?moment(value, 'HH:mm'): undefined}
                showNow={false} 
                inputReadOnly={true} 
                onChange={handleChange} 
                disabledHours={disabledHours} 
                disabledMinutes={disabledMinutes} />
        </label>
    )
}