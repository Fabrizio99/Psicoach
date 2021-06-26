import React from 'react'
import { DatePicker } from 'antd';
import '../../styles/components/general/_input.scss';

export const DateForm = ({onChange, name, label, disabledDate}) => {
    const handleChange = (date, dateString) => {
        onChange({
            target: {
                name,
                value: dateString
            }
        })
    }
    return (
        <label className="input__label">
            {label}
            <DatePicker onChange={handleChange}  style={{ width: '100%' }} showToday={false} inputReadOnly={true} disabledDate={disabledDate}/>
        </label>
    )
}
