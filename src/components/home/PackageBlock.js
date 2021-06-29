import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Alerts } from '../../helpers/Alerts';

export const PackageBlock = ({name,colorName,price,session,contentItemList, id}) => {
    const {auth} = useSelector(state=>state);
    const history = useHistory();

    const handleClick = () => {
        if(Object.keys(auth).length === 0){
            Alerts.showInfoMessage('Debe iniciar sesión para adquirir un paquete')
        }else{
            history.push(`/appointment/${id}`)
        }
    }

    return (
        <div className="package-block" onClick={handleClick}>
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
        </div>
    )
}
PackageBlock.propTypes = {
    id :              PropTypes.number.isRequired,
    name :            PropTypes.string.isRequired,
    price :           PropTypes.string.isRequired,
    session :         PropTypes.string.isRequired,
    contentItemList : PropTypes.array.isRequired,
}