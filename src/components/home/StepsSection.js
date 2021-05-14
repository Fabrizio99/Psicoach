import React from 'react'
import { StepBlock } from './StepBlock'

export const StepsSection = () => {
    const steps = [
        {
            step: 1,
            title: 'Consulta',
            description: 'Se determina la temática a abordar. Duración de 30 minutos aprox.'
        },
        {
            step: 2,
            title: 'Sesión psicológica',
            description: 'Inicia el proceso psicoterapéutico bajo el enfoque cognitivo-conductual, guestáltico y PNL. Duración de 45 minutos aprox.'
        },
        {
            step: 3,
            title: 'Seguimiento del caso',
            description: 'La sesión puede variar de frecuencia, realizandose 1 ó 2 veces por mes en función del avance del paciente.'
        },
    ]
    return (
        <section className="step-section">
            <div className="center-content step-section__container">
                <h3 className="title-section">
                    Pasos a seguir
                </h3>
                <div className="steps-container">
                    {
                        steps.map(step=>(
                            <StepBlock
                                key={step.step}
                                {...step}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
