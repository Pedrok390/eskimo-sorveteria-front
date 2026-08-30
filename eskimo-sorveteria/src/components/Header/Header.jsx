import eskimoLogo from '../../images/eskimo-logo.png'
import cartIcon from '../../images/cart-icon.png'
import {NavLink} from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import SideBar from './components/SideBar/SideBar';
import Cart from './components/SideBar/components/Cart';
import HeaderSide from './components/SideBar/components/HeaderSide';

export default function Header(props) {
    const { onOpenSideBar, onCloseSideBar, sideBar } = props
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
                    <button className='header__nav-cart' onClick={() => onOpenSideBar(cartSideBar)}><img src={cartIcon} className='header__nav-icon' alt='Icone de Carrinho' ></img>Carrinho</button>
                </div>
            </header>
            {sideBar && <SideBar children={sideBar.children} onCloseSideBar={onCloseSideBar} />}
            {headerSide && <HeaderSide setHeaderSide={setHeaderSide} onOpenSideBar={() => onOpenSideBar(cartSideBar)} />}
        </>
    )
}