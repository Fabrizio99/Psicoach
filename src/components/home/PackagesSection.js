import React from 'react';
import { AppSettings } from '../../util/AppSeetings';
import { PackageBlock } from './PackageBlock';

export const PackagesSection = () => {
    const productContent = [
        {
            cant_session:     "1",
            id:               1,
            name:             "SESION",
            price:            "70",
            colorName:        '#8396D6',
            session :         '',
            contentItemList : []
        },
        {
            cant_session:     "5",
            id:               2,
            name:             "REGULAR",
            price:            "380",
            colorName:        '#F78490',
            session :         'por 5 sesiones (70 c/u) + consulta',
            contentItemList : [
                'Informe firmado y sellado s/. 60'
            ]
        },
        {
            cant_session:     "5",
            id:               3,
            name:             "MEDIUM",
            price:            "360",
            colorName:        '#FFE9CC',
            session :         'por 5 sesiones (65 c/u) + consulta',
            contentItemList : [
                'Acceso exclusivo al grupo de apoyo psicológico de WhatsApp',
                'Acceso gratuitos a las MasterClass',
                'Informe firmado y sellado S/. 30'
            ]
        },
        {
            cant_session:     "5",
            id:               4,
            name:             "PREMIUM",
            price:            "340",
            colorName:        '#CEF0EA',
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
            cant_session:     "8",
            id:               5,
            name:             "LUXURY",
            price:            "428",
            colorName:        '#7ACCF1',
            session :         'por 6 sesiones (70 c/u) + consulta',
            contentItemList : [
                'Todos los beneficios del paquete Premium',
                'Pago en 2 cuotas (210/210)'
            ]
        }
    ]

    const getPackages = _ => {
        const productsJson = localStorage.getItem(AppSettings.LOCAL_STORAGE.SELECT)

        if(!productsJson)   return []        
        const {products} = JSON.parse(localStorage.getItem(AppSettings.LOCAL_STORAGE.SELECT))

        products.forEach(product => {
            const current = productContent.find(p => p.id === product.id)
            product.colorName = current.colorName;
            product.session = current.session
            product.contentItemList = current.contentItemList
        });
        return products
    }

    const products = getPackages()

    return (
        productContent.length > 0 && (
            <div className="package-section">
                <div className="center-content">
                    <h3 className="title-section">
                        Paquetes
                    </h3>
                    <p className="package-text">Seleccione un paquete</p>
                    <div className="slides-container">
                        <div className="slides-wrapper">
                            {
                                productContent.map(p=>(
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
    )
}
