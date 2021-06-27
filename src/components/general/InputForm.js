import React from 'react';
import { Input, InputNumber } from 'antd';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import PropTypes from 'prop-types';
import '../../styles/components/general/_input.scss';
import { AppSettings } from '../../util/AppSeetings';

export const InputForm = ({onChange, value, type, name, label, disabled=false, onEnter, ...extraData}) => {
    let {typeNumber, minValue, maxValue} = extraData

    if(typeNumber === AppSettings.TYPE_NUMBERS.AGE){
        minValue = 0;
        maxValue = 100;
    }


    const handleChange = e => {
        if(type !== AppSettings.TYPE_INPUTS.NUMBER && type !== AppSettings.TYPE_INPUTS.TEL){
            onChange(e)
            return;
        }

        const inputValue = e

        if(!Number(inputValue) && inputValue) return

        onChange({
            target: {
                name,
                value: String(inputValue)
            }
        })
    }

    const inputHTML = _ => {
        let input;

        switch (type) {
            case AppSettings.TYPE_INPUTS.NUMBER:
                input = <InputNumber name={name} onChange={handleChange} type="number" autoComplete="off" value={value} disabled={disabled} min={minValue} max={maxValue} onPressEnter={onEnter} style={{ width: '100%' }}/>
                // input = <Input name={name} onChange={handleChange} type={type} autoComplete="off" value={value} disabled={disabled} min={minValue} max={maxValue}/>
                break;
            case AppSettings.TYPE_INPUTS.TEL:
                input = <InputNumber name={name} onChange={handleChange} type="number" autoComplete="off" value={value} disabled={disabled} onPressEnter={onEnter} style={{ width: '100%' }}/>
                    break;
            case AppSettings.TYPE_INPUTS.PASSWORD:
                input = (
                    <Input.Password
                        name={name} onChange={handleChange} type={type} autoComplete="off" value={value} disabled={disabled} onPressEnter={onEnter}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                )
                break;
            default:
                input = <Input name={name} onChange={handleChange} type={type} autoComplete="off" value={value} disabled={disabled} onPressEnter={onEnter}/>
                break;
        }
        return input
    }

    return (
        <label className="input__label">
            {label}   
            {inputHTML()}
        </label>
    )
}

InputForm.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}