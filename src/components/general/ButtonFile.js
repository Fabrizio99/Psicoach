import React, { useRef, useState } from 'react'
import { Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import '../../styles/components/general/_input.scss';
import { Alerts } from '../../helpers/Alerts';

export const ButtonFile = ({label, onChange}) => {
    let fileRef           = useRef(null);
    const [file, setFile] = useState(undefined)

    const handleOpenSelectFile = _ =>{
        fileRef.current.input.click()
    }
    const handleOnChange = e => {
        const {files} = e.currentTarget;
        if(!files || !files.length)  return

        let fileSelected = files[0]
        if(!fileSelected.type.includes('image')){
            Alerts.showErrorMessage('Debe seleccionar una imagen')
            return;
        }

        setFile(fileSelected)
        onChange(fileSelected)
    }

    return (
        <>
            <label className="input__label" style={{marginTop: 10}}>
                {label}
                <Button icon={<UploadOutlined/>} onClick={handleOpenSelectFile}>Seleccionar archivo</Button>
                <Input type="file" name="name" style={{display: 'none'}} ref={fileRef} onChange={handleOnChange}/>
                {
                    file && (
                        <small className="button--file__text">{file?.name || ''}</small>
                    )
                }
            </label>
        </>
    )
}
