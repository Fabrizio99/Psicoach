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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi nulla, ultrices iaculis tincidunt non, varius sed tellus. Quisque congue quam et ante tempor, id tristique elit convallis. Vestibulum mauris nisi, lacinia quis mollis non, tristique a dolor. Nulla dignissim purus in varius mollis.
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
