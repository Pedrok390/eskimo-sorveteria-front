import eskimoLogo from '../../images/eskimo-logo.png'
import cartIcon from '../../images/cart-icon.png'
import {NavLink} from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import SideBar from './components/SideBar/SideBar';

export default function Header(props) {
    const { onOpenSideBar, onCloseSideBar, sideBar } = props
    const [isFixed, setIsFixed] = useState(false);
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


    return (
        <>
            <header ref={headerRef} className={`header ${isFixed ? "header--fixed" : ""}`}>
                <div className='header__title-container'>
                    <img src={eskimoLogo} alt="Eskimo Sorveteria" className="header__logo" />
                    <h1 className="header__title">Eskimó Estrada do Campinho</h1>
                </div>
                <div className='header__nav'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}>
                        Sobre
                    </NavLink>
                    <button className='header__nav-cart' onClick={onOpenSideBar}><img src={cartIcon} className='header__nav-icon' alt='Icone de Carrinho' ></img>Carrinho</button>
                </div>
            </header>
            {sideBar && <SideBar onCloseSideBar={onCloseSideBar} />}
        </>
    )
}