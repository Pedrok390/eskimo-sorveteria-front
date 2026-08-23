import heroImg from '../../../../images/jose.png'

export default function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <h1 className='hero__title'>Bem-vindo à Eskimo Estrada do Campinho!</h1>
                    <p className='hero__description'>Deliciosos sorvetes artesanais feitos com ingredientes frescos e naturais.</p>
                </div>
                <img className="hero__image" src={heroImg} alt="Verão" />
            </div>
        </>
    )
}