import eskimoLogo from '../../../../../images/eskimo-logo.png'
import cartIcon from '../../../../../images/cart-icon.png'
import { NavLink } from 'react-router-dom'

export default function HeaderSide(props){
    const { setHeaderSide, onOpenSideBar } = props
    return (
        <>  
            <div className='headerside'>
                <div className="headerside__container">
                    <div className='headerside__title-container'>
                        <img src={eskimoLogo} alt="Eskimo Sorveteria" className="header__logo" />
                        <h1 className="headerside__title">Eskimó Estrada do Campinho</h1>
                        <button className='headerside__close' onClick={() => setHeaderSide(false)}>X</button>
                    </div>
                    <NavLink to="/" className='headerside__nav-link' onClick={() => setHeaderSide(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/catalog" className='headerside__nav-link' onClick={() => setHeaderSide(false)}>
                        Catálogo
                    </NavLink>
                    <NavLink to="/about" className='headerside__nav-link' onClick={() => setHeaderSide(false)}>
                        Sobre
                    </NavLink>
                    <button className='header__nav-cart' onClick={() => onOpenSideBar()}><img src={cartIcon} className='header__nav-icon' alt='Icone de Carrinho' ></img>Carrinho</button>
                </div>
            </div>
        </>
    )
}