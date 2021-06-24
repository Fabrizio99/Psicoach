import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

export const InputForm = ({onChange, value, type, name, label}) => {
    return (
        <label className="auth__label">
            {label}
            <Input className="auth__input" name={name} onChange={onChange} type={type} autoComplete="off" value={value}/>
        </label>
    )
}

InputForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}