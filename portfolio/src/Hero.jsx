export default function Hero(){
    return (
        <>
            <section className="hero" id="hero">
                <div className="hero-left">
                    <p>Hello, I'm Eyiladeogo</p>
                    <h1>Fullstack Developer</h1>
                    <p>based in Nigeria</p>
                    <a href="src/assets/Eyiladeogo.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="stacked-button">
                            <button className="top-button">
                                
                            </button>
                            <button className="bottom-button">
                                Résumé
                            </button>
                        </div>
                    </a>
                </div>
                <div className="hero-right">
                    <img src="https://picsum.photos/500/400"></img>
                </div>
            </section>
        </>
    )
}