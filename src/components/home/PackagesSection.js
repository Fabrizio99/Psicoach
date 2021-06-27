import React from 'react';
import { PackageBlock } from './PackageBlock';

export const PackagesSection = () => {
    const packages = [
        {
            id:               1,
            name :            'REGULAR',
            colorName:        '#F78490',
            price :           380,
            session :         'por 5 sesiones (70 c/u) + consulta',
            contentItemList : [
                'Informe firmado y sellado s/. 60'
            ]
        },
        {
            id:               2,
            name :            'MEDIUM',
            colorName:        '#FFE9CC',
            price :           360,
            session :         'por 5 sesiones (65 c/u) + consulta',
            contentItemList : [
                'Acceso exclusivo al grupo de apoyo psicológico de WhatsApp',
                'Acceso gratuitos a las MasterClass',
                'Informe firmado y sellado S/. 30'
            ]
        },
        {
            id:               3,
            name :            'PREMIUM',
            colorName:        '#CEF0EA',
            price :           340,
            session :         'por 5 sesiones (60 c/u) + consulta',
            contentItemList : [
                'Acceso exclusivo al grupo de apoyo psicológico de WhatsApp',
                'Acceso gratuitos a las MasterClass, talleres y mentorías psicológicas',
                'Tarjeta de motivación todos los lunes',
                'Informe firmado y sellado S/. 15',
                'Pago en 2 cuotas (170/170)'
            ]
        },
        {
            id:               4,
            name :            'LUXURY',
            colorName:        '#7ACCF1',
            price :           380,
            session :         'por 5 sesiones (70 c/u) + consulta',
            contentItemList : [
                'Todos los beneficios del paquete Premium',
                'Pago en 2 cuotas (210/210)'
            ]
        }
    ]

    return (
        <div className="package-section">
            <div className="center-content">
                <h3 className="title-section">
                    Paquetes
                </h3>
                <div className="slides-container">
                    <div className="slides-wrapper">
                        {
                            packages.map(p=>(
                                <PackageBlock
                                    key={p.id}
                                    {...p}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
