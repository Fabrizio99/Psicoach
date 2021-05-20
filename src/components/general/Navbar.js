import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../helpers/getImages';
import { Menu } from './Menu'

export const Navbar = () => {
    useEffect(() => {
        const menuButton = document.querySelectorAll('.menu-button');
        const menuLinks  = document.querySelectorAll('.menu-content__link');
        const menuBlock  = document.getElementById('menuBlock');
        const html      = document.querySelector('html');
        
        const toggleMenu = _=>{
            menuBlock.classList.toggle('open');
            html.style.overflow = menuBlock.classList.contains('open')?'hidden':'auto';
        }
        menuButton.forEach(button=>button.addEventListener('click',toggleMenu))
        
        window.addEventListener('resize',function(){
            if(window.matchMedia("(min-width: 992px)").matches && menuBlock.classList.contains('open')){
                menuBlock.classList.remove('open');
                html.style.overflow = menuBlock.classList.contains('open')?'hidden':'auto';
            }
        });

        document.querySelector('.menu-content').addEventListener('click',function(e) {
            e.target.classList.contains('menu-content__link') && toggleMenu();
        });
    }, [])
    return (
        <nav className="navbar">
            <div className="center-content navbar-content">
                <div className="navbar-content__left">
                    <Link to="/">
                        LOGO
                    </Link>
                    <div className="navbar__links-container">
                        <Link to="/us" className="navbar__link">
                            Nosotros
                        </Link>
                        <Link to="/talleres" className="navbar__link">
                            Talleres
                        </Link>
                        <Link to="/especialistas" className="navbar__link">
                            Especialistas
                        </Link>
                    </div>
                </div>
                <div className="navbar-content__right">
                    <Link to="/auth/login" className="navbar__user__link">
                        Iniciar Sesión
                    </Link>
                    <button id="menuButton" className="button navbar__menu__button menu-button">
                        <img src={images('./menu-button.svg').default} alt="menu"/>
                    </button>
                </div>
            </div>
            <Menu/>
        </nav>
    )
}
