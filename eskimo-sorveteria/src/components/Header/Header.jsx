import {NavLink} from 'react-router-dom'
import { useEffect, useState, useRef, useContext } from 'react';

import eskimoLogo from '../../images/eskimo-logo.png'
import cartIcon from '../../images/cart-icon.png'

import SideBar from './components/SideBar/SideBar';
import Cart from './components/SideBar/components/Cart';
import HeaderSide from './components/SideBar/components/HeaderSide';
import AccountMenu from "../Account/AccountMenu"

import CurrentCartContext from '../../contexts/CurrentCartContext';

export default function Header(props) {
    const { isLoggedIn, isCheckingAuth, currentClient } = useContext(CurrentCartContext)
    const { onOpenSideBar, onCloseSideBar, sideBar, onLogout } = props
    const [isFixed, setIsFixed] = useState(false);
    const [headerSide, setHeaderSide] = useState(false)
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        const headerHeight = headerRef.current.offsetHeight;

        setIsFixed(window.scrollY > headerHeight);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const cartSideBar = {children: <Cart onCloseSideBar={onCloseSideBar}/>}

    const accountSideBar = {
        variant: "account",
        children: (
            <AccountMenu
            currentClient={currentClient}
            onCloseSideBar={onCloseSideBar}
            onLogout={onLogout}
            />
        )
    }
    return (
        <>
            {isFixed && <header className='header__placeholder'></header>}
            <header ref={headerRef} className={`header header--mobile ${isFixed ? "header--fixed" : ""}`}>
               <div className='header__title-container'>
                    <img src={eskimoLogo} alt="Eskimo Sorveteria" className="header__logo" />
                    <h1 className="header__title">Eskimó Estrada do Campinho</h1>
                </div>
                <button className='header__button-headerbar' onClick={() => {setHeaderSide(true)}}>=</button> 
            </header>
            <header ref={headerRef} className={`header header--desktop ${isFixed ? "header--fixed" : ""}`}>
                <div className='header__title-container'>
                    <img src={eskimoLogo} alt="Eskimo Sorveteria" className="header__logo" />
                    <h1 className="header__title">Eskimó Estrada do Campinho</h1>
                </div>
                <div className='header__nav'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>
                        Home
                    </NavLink>
                    <NavLink to="/catalog" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>
                        Catálogo
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>
                        Sobre
                    </NavLink>
                    {isCheckingAuth ? (
                        <span className="header__nav-link">
                            Verificando...
                        </span>
                        ) : isLoggedIn ? (
                        <button
                            className="header__nav-link header__account-button"
                            type="button"
                            onClick={() => onOpenSideBar(accountSideBar)}
                            aria-label="Abrir menu da minha conta"
                        >
                            {currentClient?.name?.split(" ")[0] || "Minha conta"}
                        </button>
                        ) : (
                        <NavLink
                            to="/sign"
                            className="header__nav-link"
                        >
                            Entrar
                        </NavLink>
                    )}
                    <button className='header__nav-cart' onClick={() => onOpenSideBar(cartSideBar)}><img src={cartIcon} className='header__nav-icon' alt='Icone de Carrinho' ></img></button>
                </div>
            </header>
            {sideBar && <SideBar children={sideBar.children} onCloseSideBar={onCloseSideBar} variant={sideBar.variant} />}
            {headerSide && <HeaderSide setHeaderSide={setHeaderSide} onOpenSideBar={() => onOpenSideBar(cartSideBar)} />}
        </>
    )
}