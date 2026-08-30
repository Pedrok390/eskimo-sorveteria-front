import footerLogo from '../../images/eskimo-logo-white.png'
import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaTiktok
} from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className="footer">
                <img className='footer__logo' src={footerLogo} alt='Logo Eskimó Branca'/>
                <div className='footer__container'>
                    <h3 className='footer__container-title'>Endereço</h3>
                    <h3 className='footer__container-title'>Telefone para Contato</h3>
                    <h3 className='footer__container-title'>Siga-nos</h3>
                    <p className='footer__info'>Estada do Campinho 2585 - Loja B</p>
                    <p className='footer__info'>+55 (21) 96621-9711</p>
                    <div className='footer__socials'>
                        <a href="https://instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" className="footer__social"><FaInstagram /></a>
                        <a href="https://facebook.com/seufacebook" target="_blank" rel="noopener noreferrer"className="footer__social"><FaFacebook /></a>
                        <a href="https://wa.me/5521966219711" target="_blank" rel="noopener noreferrer" className="footer__social"><FaWhatsapp /></a>
                    </div>
                </div>
                    
            </div>
        </>
    )
}