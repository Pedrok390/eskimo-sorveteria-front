import heroImg from '../../../../images/jose.png'
import { HiArrowLongRight } from "react-icons/hi2";
import { VscLocation } from "react-icons/vsc";

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <p className='hero__badge'>O sabor do seu dia</p>
                    <h1 className='hero__title'>Bem-vindo à Eskimo Estrada do Campinho!</h1>
                    <p className='hero__description'>Escolha seus sorvetes, picolés e sobremesas favoritos sem sair de casa.</p>
                    <div className='hero__button-container'>
                        <button className='hero__button-catalog'>Explorar o catálogo <HiArrowLongRight className='hero__button-icon' /></button>
                        <button className='hero__button-location'>Como chegar <VscLocation className='hero__button-icon' /></button>
                    </div>
                </div>
                <img className="hero__image" src={heroImg} alt="Verão" />
            </div>
        </>
    )
}