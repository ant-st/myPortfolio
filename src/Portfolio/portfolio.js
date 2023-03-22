import React from "react";
import './portfolio.css'

export const Portfolio = () => {
    return (

        <section id="portfolio">
            <h2>Tutaj znajdziecie Państwo część moich projektów, razem z linkiem do witryny, jak i do repozytorium w GitHub.</h2>
            <section id="gallery">
                <div className="container">
                    <h3>Novo Garden</h3>
                    <img src={require('./novo.png')} alt='NovoGarden thumb'/>
                    <p>Strona wykonana w ReactJS, prezentująca ofertę biura architekta krajobrazu. Wszystkie komponenty wykonane przeze mnie.</p>
                    <div className="buttons">
                        <a href='https://novogarden-d8d0e.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='NovoGarden - URL'/></a>
                        <a href='https://github.com/ant-st/NovoGardenv2' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - NovoGarden'/></a>
                    </div>
                </div>
                <div className="container">
                    <h3>My Portfolio</h3>
                    <img src={require('./myPortfolio.png')} alt='myPortfolio thumb '/>
                    <p>Właśnie ta strona - zbudowana w react.js, z animacjami CSS</p>
                    <div className="buttons">
                        <a href='https://portfolio-42c10.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='Portfolio - URL'/></a>
                        <a href='https://github.com/ant-st/myPortfolio' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - Portfolio'/></a>
                    </div>
                </div>
            </section>
        </section>
    )

};

export const PortfolioEN = () => {
    return (
                <section id="portfolio">
                    <h2>Here you can find a few of my former projects, along with a hyperlink to them and a GitHub repository.</h2>
                    <section id="gallery">
                        <div className="container">
                            <h3>Novo Garden</h3>
                            <img src={require('./novo.png')} alt='NovoGarden logo'/>
                            <p>ReactJS webpage built for a landscape designer. All of the components have been written by me. Website is in Polish.</p>
                            <div className="buttons">
                                <a href='https://novogarden-d8d0e.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='NovoGarden - URL'/></a>
                                <a href='https://github.com/ant-st/NovoGardenv2' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - NovoGarden'/></a>
                            </div>
                        </div>
                        <div className="container">
                            <h3>My Portfolio</h3>
                            <img src={require('./myPortfolio.png')} alt='myPortfolio thumb '/>
                            <p>This is the page you're at. Take a look, how it's made. React.JS + CSS animations</p>
                            <div className="buttons">
                                <a href='https://portfolio-42c10.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='Portfolio - URL'/></a>
                                <a href='https://github.com/ant-st/myPortfolio' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - Portfolio'/></a>
                            </div>
                        </div>
                    </section>
                </section>
    )

};