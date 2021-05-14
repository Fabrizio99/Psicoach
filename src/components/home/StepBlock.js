import React from 'react'

export const StepBlock = ({step, title, description}) => {
    return (
        <div className="step-block">
            <div className="step-number__group">
                <div className="step-number__line"></div>
                <p className="step-block__number">{step}</p>
            </div>
            <p className="step-block__title">{title}</p>
            <p className="step-block__description">{description}</p>
        </div>
    )
}
