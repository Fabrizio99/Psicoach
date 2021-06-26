import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import '../../styles/components/general/_input.scss';

export const InputForm = ({onChange, value, type, name, label, disabled=false}) => {
    return (
        <label className="input__label">
            {label}
            <Input name={name} onChange={onChange} type={type} autoComplete="off" value={value} disabled={disabled}/>
        </label>
    )
}

InputForm.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}