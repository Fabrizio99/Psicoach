import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../../helpers/getImages';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="center-content">
                    <img src={images('./footer-logo.svg').default} className="footer__logo" alt="logo"/>
                    <div className="footer-info">
                        <div className="info-group">
                            <h4 className="info-group__title">Sobre el sitio</h4>
                            <Link to="/us" className="info-group__link">
                                Nosotros
                            </Link>
                            <Link to="/talleres" className="info-group__link">
                                Talleres
                            </Link>
                            <Link to="/especialistas" className="info-group__link">
                                Especialistas
                            </Link>
                        </div>
                        <div className="contact-group">
                            <h4 className="contact-group__title">Contáctanos</h4>
                            <div className="contact-group__whatsapp">
                                <img src={images('./whatsapp.svg').default} alt="whatsapp"/>
                                <a href="tel:982934212" className="contact-group__whatsapp__number">+51 982 934 212</a>
                            </div>
                            <div className="contact-group__media">
                                <a href="https://www.facebook.com/PsicoachEnVida" target="_blank">
                                    <img src={images('./facebook.svg').default} alt="facebook"/>
                                </a>
                                <a href="https://www.instagram.com/psicoachenvidaofficial/" target="_blank">
                                    <img src={images('./instagram.svg').default} alt="instagram"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                <div className="center-content">
                    <p className="copyright-text">© 2017 - 2021 Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}
