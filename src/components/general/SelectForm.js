import React from 'react'
import PropTypes from 'prop-types';
import { Select } from 'antd';
import '../../styles/components/general/_input.scss';

const { Option } = Select;

export const SelectForm = ({onChange, name, label, options, placeholder}) => {

    const handleChange = (_value) => {
        onChange({
            target: {
                name,
                value: _value
            }
        })
    }
    
    return (
        <label className="input__label">
            {label}
            <Select onChange={e => handleChange(e)} style={{ width: '100%' }} placeholder={placeholder}>
                {
                    options.map((option, index) => (
                        <Option 
                            value={option.value}
                            key={index}
                        >
                            {option.name}
                        </Option>
                    ))
                }
            </Select>
        </label>
    )
}
SelectForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}
