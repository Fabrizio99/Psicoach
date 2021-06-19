import React from 'react'
import { IdentityContent } from './IdentityContent'

export const IdentitySection = () => {
    const identityContent = [
        {
            title: 'Misión',
            text : 'Somos un centro psicólogico multidisciplinario que promueve, mejora y potencia el desarrollo personal y emocional del ser humano, garantizando un servicio personalizado con bases teóricas científicas que va de la mano con un trato humanístico'
        },
        {
            title: 'Visión',
            text : 'Consolidarnos como la clínica psicológica multidisciplinaria líder de Lima y Provincia.'
        }
    ]
    return (
        <section className="identity-section">
            <div className="center-content identity-section__content">
                {
                    identityContent.map((content,index)=>(
                        <IdentityContent
                            {...content}
                            key={index}
                        />
                    ))
                }
            </div>
        </section>
    )
}
