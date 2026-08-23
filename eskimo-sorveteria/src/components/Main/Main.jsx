import Hero from './components/Hero/Hero.jsx'

export default function Main() {
    return (
        <>
            <main className="main">
                <Hero />
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5816104923265!2d-43.59095296436157!3d-22.89190903146985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be36dbaedc453%3A0xd65a467db49541a7!2sEskim%C3%B3%20Sorveteria%20Estrada%20do%20Campinho!5e0!3m2!1spt-BR!2sbr!4v1787513530607!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </main>
        </>
    )
}