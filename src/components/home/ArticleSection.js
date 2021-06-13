import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../helpers/getImages'

export const ArticleSection = () => {
    return (
        <section className="article-section">
            <div className="center-content article-section__container">
                <h3 className="title-section">
                    Artículos
                </h3>
                <div className="article-section__grid">
                    <Link to="/articles" className="article-section__link">
                        Ver todos
                    </Link>
                    <div className="article-block outstanding">
                        <img src={images('./article-image.png').default} className="article-block__image" alt="article"/>
                        <div className="article-block__content">
                            <p className="article-block__title">El poder de la mente</p>
                            <p src="" className="article-block__description">
                                La mente es tan poderosa porque ejerce una influencia directa en nuestros actos conscientes. 
                            </p>
                        </div>
                    </div>
                    <div className="article-block">
                        <img src={images('./article-image.png').default} className="article-block__image" alt="article"/>
                        <div className="article-block__content">
                            <p className="article-block__title">El poder de la mente</p>
                            <p src="" className="article-block__description">
                                La mente es tan poderosa porque ejerce una influencia directa en nuestros actos conscientes. 
                            </p>
                        </div>
                    </div>
                    <div className="article-block">
                        <img src={images('./article-image.png').default} className="article-block__image" alt="article"/>
                        <div className="article-block__content">
                            <p className="article-block__title">El poder de la mente</p>
                            <p src="" className="article-block__description">
                                La mente es tan poderosa porque ejerce una influencia directa en nuestros actos conscientes. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
