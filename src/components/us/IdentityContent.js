import React from 'react'
import PropTypes from 'prop-types';

export const IdentityContent = ({title,text}) => {
    return (
        <div className="identity-section__block">
            <div className="identity-section__block__content">
                <h5 className="identity-section__block__title">
                    {title}
                </h5>
                <p className="identity-section__block__description">
                    {text}
                </p>
            </div>
        </div>
    )
}

IdentityContent.propTypes = {
    title : PropTypes.string.isRequired,
    text  : PropTypes.string.isRequired,
}