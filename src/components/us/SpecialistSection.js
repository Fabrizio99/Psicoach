import React from 'react';
import { images } from '../../helpers/getImages'

export const SpecialistSection = () => {
    return (
        <section className="specialist-section">
            <div className="center-content specialist-section__content">
                <h3 className="specialist-section__title">Nuestros especialistas</h3>
                <div className="specialist-section__list">
                    <div className="specialist-block">
                        <img src={images('./profile1-image.png').default} className="specialist-block__image" alt="specialist"/>
                        <div className="specialist-block__information">
                            <h4 className="specialist-block__information__title">Dereck San Miguel Carhuas</h4>
                            <small className="specialist-block__information__job">CEO Psicoach en Vida</small>
                            <p className="specialist-block__information__text">Psicólogo Clínico de la Universidad Ricardo Palma</p>
                            <p className="specialist-block__information__text">Psicoterapeuta Guestáltico</p>
                            <p className="specialist-block__information__text">PNL Practitioner</p>
                        </div>
                    </div>
                    <div className="specialist-block">
                        <img src={images('./profile2-image.png').default} className="specialist-block__image" alt="specialist"/>
                        <div className="specialist-block__information">
                            <h4 className="specialist-block__information__title">Nataly Fortón Martinez</h4>
                            <small className="specialist-block__information__job">Practicante de Psicoach en Vida</small>
                            <p className="specialist-block__information__text">Estudiante de 10mo ciclo de Psicología en la universidad Autónoma del Perú</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
