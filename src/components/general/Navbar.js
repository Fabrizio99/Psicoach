import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { images } from '../../helpers/getImages';
import { Menu } from './Menu'

export const Navbar = () => {
    const userData = useSelector(state=>state.auth);
    const isLoggedIn = userData.token && userData.profile;
    const html      = document.querySelector('html');

    useEffect(() => {
        const menuButton = document.querySelectorAll('.menu-button');
        const menuBlock  = document.getElementById('menuBlock');

        const handleToggleMenu  = _ => {
            menuBlock.classList.toggle('open');
            html.style.overflow = menuBlock.classList.contains('open')?'hidden':'auto';
        }
        const handleResize      = _ => {
            if(window.matchMedia("(min-width: 992px)").matches && menuBlock.classList.contains('open')){
                menuBlock.classList.remove('open');
                html.style.overflow = menuBlock.classList.contains('open')?'hidden':'auto';
            }
        }
        const handleMenuContent = (e) => {
            e.target.classList.contains('menu-content__link') && handleToggleMenu();
        }

        window.addEventListener('resize',handleResize);
        document.querySelector('.menu-content').addEventListener('click',handleMenuContent);
        menuButton.forEach(button=>button.addEventListener('click',handleToggleMenu));
        
        // return () => {
        //     window.removeEventListener('resize',handleResize);
        //     document.querySelector('.menu-content').removeEventListener('click',handleMenuContent);
        //     menuButton.forEach(button=>button.removeEventListener('click',handleToggleMenu));
        // }
    }, []);
    
    useEffect(() => {
        if(!Object.keys(userData).length)   return;

        const dropdownToggle = document.getElementById('dropdownToggle');
        const userDropdown   = document.querySelector('.user-dropdown');
        const dropdownMenu   = document.getElementById('dropdownMenu');
        
        const handleDropDown = _=>{
            userDropdown.classList.toggle('dropdown-show');
        }
        const handleHideDropdown = event=>{
            if(dropdownMenu !== event.target && !dropdownMenu.contains(event.target) && (event.target !==  dropdownToggle && !dropdownToggle.contains(event.target))){
                userDropdown.classList.remove('dropdown-show');
            }
        }

        dropdownToggle.addEventListener('click',handleDropDown)
        html.addEventListener('click',handleHideDropdown);

        // return () => {
        //     html.removeEventListener('click',handleDropDown);
        //     dropdownToggle.removeEventListener('click',handleHideDropdown);
        // }
    }, [userData])

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
                    {
                        (!!isLoggedIn) || (
                            <Link to="/auth/login" className="navbar__user__link">
                                Iniciar Sesión
                            </Link>
                        )
                    }
                    {
                        (!!isLoggedIn) && (
                            <div className="user-dropdown">
                                <div className="user-dropdown__toggle" id="dropdownToggle">
                                    <p className="user-dropdown__user">{userData.profile.name}</p>
                                    <img src={images('./arrow-icon.svg').default} className="user-dropdown__arrow" alt="arrow-profile"/>
                                </div>
                                <div className="user-dropdown__menu" id="dropdownMenu">
                                    <Link className="user-dropdown__item" to="/profile">
                                        Perfil
                                    </Link>
                                    <div className="user-dropdown__item">
                                        Salir
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <button id="menuButton" className="button navbar__menu__button menu-button">
                        <img src={images('./menu-button.svg').default} alt="menu"/>
                    </button>
                </div>
            </div>
            <Menu/>
        </nav>
    )
}
