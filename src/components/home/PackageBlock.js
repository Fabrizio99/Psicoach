import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const PackageBlock = ({name,colorName,price,session,contentItemList}) => {
    return (
        <Link to="/appointment" className="package-block">
            <p className="package-block__name" style={{backgroundColor: colorName}}>
                {name}
            </p>
            <p className="package-block__price">
                S/. {price}
            </p>
            <p className="package-block__sessions">
                {session}
            </p>
            <div className="package-block__content">
                {
                    contentItemList.map((item,index)=>(
                        <p className="package-block__content__item" key={index}>
                            • {item}
                        </p>
                    ))
                }
            </div>
            {/* <div className="package-block__buy-button">
                +
            </div> */}
        </Link>
    )
}
PackageBlock.propTypes = {
    name :            PropTypes.string.isRequired,
    price :           PropTypes.number.isRequired,
    session :         PropTypes.string.isRequired,
    contentItemList : PropTypes.array.isRequired,
}