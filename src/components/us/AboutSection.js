import React from 'react';
import { images } from '../../helpers/getImages';

export const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="center-content about-section__content">
                <div className="about-section__left">
                    <h3 className="about-section__title">
                        ¿Quienes somos?
                    </h3>
                    <p className="about-section__description">
                        Somos especialistas en desarrollo personal, inteligencia emocional, dependencia emocional, motivación, habilidades sociales, liderazgo y relaciones de pareja
                    </p>
                </div>
                <div className="about-section__right">
                    <img
                        className="about-section__image"
                        alt="about"
                        src={images('./about-image.png').default}
                    />
                </div>
            </div>
        </section>
    )
}
