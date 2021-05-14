import React from 'react'

export const MainSection = () => {
    return (
        <section className="main-section">
            <div className="center-content main-section__content">
                <div className="main-section__left">
                    <h2 className="main-section__title">EN BÚSQUEDA DE TU MEJOR VERSIÓN</h2>
                    <p className="main-section__description">
                        Especialistas en el desarrollo personal, inteligencia emocional, motivación habilidades sociales, liderazgos y relaciones de pareja.
                    </p>
                    <button className="button button--primary main-section__button">
                        Agenda tu cita
                    </button>
                </div>
                <div className="main-section__right">
                    <div className="main-section__video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/9FBxfd7DL3E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
