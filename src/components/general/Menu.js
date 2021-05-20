import React from 'react';
import { images } from '../../helpers/getImages';
import { Link, useLocation } from 'react-router-dom';

export const Menu = () => {
    const {pathname} = useLocation();
    return (
        <div id="menuBlock" className="menu">
            <button id="closeMenuButton" className="menu__close-button menu-button">
                <img src={images('./close-button.svg').default} alt="close"/>
            </button>
            <div className="menu-content">
                {
                    pathname === '/' || (
                        <Link to="/" className="menu-content__link">
                            Inicio
                        </Link>
                    )
                }
                <Link to="/us" className="menu-content__link">
                    Nosotros
                </Link>
                <Link to="/talleres" className="menu-content__link">
                    Talleres
                </Link>
                <Link to="/especialistas" className="menu-content__link">
                    Especialistas
                </Link>
            </div>       
        </div>
    )
}
