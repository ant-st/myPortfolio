import React from "react";
import './portfolio.css'

export const Portfolio = () => {
    return (

        <section id="portfolio">
            <h2>Tutaj znajdziecie Państwo część moich projektów, razem z linkiem do witryny, jak i do repozytorium w GitHub.</h2>
            <section id="gallery">
                <div className="container">
                    <div>
                        <h3>Endless Summer Cup 2023!</h3>
                        <img src={require('./es2023.png')} alt='ES2023 thumb'/>
                        <p>Strona internetowa wydarzenia sportowego przystosowana do urządzeń mobilnych. Zawiera informacje o wydarzeniu, formularz zapisowy
                        zintegrowany z Firebase DB, a także pozwala na oglądanie listy zawodników. W przyszłości umożliwi wysłanie muzyki do występu oraz wpisywanie wyników na żywo.
                         Aplikacja Nuxt.js z użyciem I18n dla multijęzyczności</p>
                    </div>
                    <div className="buttons">
                        <a href='https://endless-summer-2023.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='ES2023 - URL'/></a>
                        <a href='https://github.com/ant-st/endless-summer-2023' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - ES2023'/></a>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h3>Fly or ride</h3>
                        <img src={require('./fly.png')} alt='Fly thumb'/>
                        <p>Duża aplikacja stworzona jako moja wymarzona platforma do planowania podróży. Projekt jeszcze w budowie.
                            Zawiera dużo integracji API, używa Nuxt, TS, Tailwind CSS. Pelny opis aplikacji w README na GH.</p>
                    </div>
                    <div className="buttons">
                        <a href='https://flyorride.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='Fly - URL'/></a>
                        <a href='https://github.com/ant-st/flyorride' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - Fly'/></a>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h3>Yes, chef!</h3>
                        <img src={require('./yeschef.png')} alt='YesChef thumb'/>
                        <p>Kompleksowa aplikacja do obsługi restauracji, od przyjmowania zamówień i dostaw, po podsumowania dnia z roliczaniem.
                            Używa React + Router i Redux, Google Maps API, Express server i SQLite3.
                            Z powodu ograniczeń Firebase nie opublikowałem jeszcze działającej aplikacji, dlatego dołączam link do YT.</p>
                    </div>
                    <div className="buttons">
                        <a href='https://youtu.be/7S1CFsIokk0' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='YesChef - URL'/></a>
                        <a href='https://github.com/ant-st/restomanager' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - Resto'/></a>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h3>RedditMini</h3>
                        <img src={require('./reddit.png')} alt='RedditMini thumb'/>
                        <p>Finalny projekt mojego kursu Codecademy - klon Reddita, wykorzystujący jego API. Strona napisana w React.JS, używa Redux Toolkit. Responsywna i zanimowana.</p>
                    </div>
                    <div className="buttons">
                        <a href='https://redditmini-2d1a9.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='RedditMini - URL'/></a>
                        <a href='https://github.com/ant-st/redditmini' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - RedditMini'/></a>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h3>Novo Garden</h3>
                        <img src={require('./novo.png')} alt='NovoGarden thumb'/>
                        <p>Strona wykonana w ReactJS, prezentująca ofertę biura architekta krajobrazu. Wszystkie komponenty wykonane przeze mnie.</p>
                    </div>
                    <div className="buttons">
                        <a href='https://novogarden-d8d0e.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='NovoGarden - URL'/></a>
                        <a href='https://github.com/ant-st/NovoGardenv2' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - NovoGarden'/></a>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h3>memoryCards</h3>
                        <img src={require('./memos.png')} alt='MemoryCards logo'/>
                        <p>Aplikacja zbudowana w React.JS przy użyciu Redux State Management Toolkit. Aplikacja działa na bazie danych stworzonej przez użytkownika, pozwalając na dodawanie nowych pozycji i ich filtrowanie.</p>
                    </div>
                    <div className="buttons">
                        <a href='https://memorycards-8085e.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='memoryCards - URL'/></a>
                        <a href='https://github.com/ant-st/memoryCards' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - memoryCards'/></a>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h3>My Portfolio</h3>
                        <img src={require('./myPortfolio.png')} alt='myPortfolio thumb '/>
                        <p>Właśnie ta strona - zbudowana w react.js, z animacjami CSS</p>
                    </div>
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
                            <div>
                                <h3>Endless Summer Cup 2023!</h3>
                                <img src={require('./es2023.png')} alt='ES2023 thumb'/>
                                <p>Sports event's webpage providing all necessary info as well as enabling to sign up for the competition,
                                    as well as checking out the competitors. In the future, the app will enable to post the freestyle music and to write down scores in real time.
                                    App uses Nuxt.js with I18n for multilingual content and Firebase Services.</p>
                            </div>
                            <div className="buttons">
                                <a href='https://endless-summer-2023.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='ES2023 - URL'/></a>
                                <a href='https://github.com/ant-st/endless-summer-2023' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - ES2023'/></a>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <h3>Fly or ride</h3>
                                <img src={require('./fly.png')} alt='Fly thumb'/>
                                <p>My dream app used to plan the perfect trip. It enables comparing many travel related services in one place. Full documentation is in ReadMe on GH.
                                    App coded in Nuxt.js with Tailwind, TypeScript and many APIs.</p>
                            </div>
                            <div className="buttons">
                                <a href='https://flyorride.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='Fly - URL'/></a>
                                <a href='https://github.com/ant-st/flyorride' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - Fly'/></a>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <h3>Yes, chef!</h3>
                                <img src={require('./yeschef.png')} alt='YesChef thumb'/>
                                <p>Complex full-stack web app used to manage the restaurant - from taking orders and deliveries up to sales summaries.
                                    It uses React with Router and Redux, Google Maps API, Express server and SQLite3.
                                    Due to Firebase limitations I cannot run Express server on it, that is why I post link to YT presentation.</p>
                            </div>
                            <div className="buttons">
                                <a href='https://youtu.be/7S1CFsIokk0' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='YesChef - URL'/></a>
                                <a href='https://github.com/ant-st/restomanager' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - Resto'/></a>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <h3>RedditMini</h3>
                                <img src={require('./reddit.png')} alt='RedditMini thumb'/>
                                <p>My final Codecademy project - Reddit clone, which uses its API. Written in React.JS using Redux Toolkit. Responsive and animated.</p>
                            </div>
                            <div className="buttons">
                                <a href='https://redditmini-2d1a9.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='RedditMini - URL'/></a>
                                <a href='https://github.com/ant-st/redditmini' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - RedditMini'/></a>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <h3>Novo Garden</h3>
                                <img src={require('./novo.png')} alt='NovoGarden logo'/>
                                <p>ReactJS webpage built for a landscape designer. All of the components have been written by me. Website is in Polish.</p>
                            </div>
                            <div className="buttons">
                                <a href='https://novogarden-d8d0e.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='NovoGarden - URL'/></a>
                                <a href='https://github.com/ant-st/NovoGardenv2' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - NovoGarden'/></a>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <h3>memoryCards</h3>
                                <img src={require('./memos.png')} alt='MemoryCards logo'/>
                                <p>ReactJS app built with Redux State Management tool. App works with a simple database created by user, allowing to memorize new words and filter them.</p>
                            </div>
                            <div className="buttons">
                                <a href='https://memorycards-8085e.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='memoryCards - URL'/></a>
                                <a href='https://github.com/ant-st/memoryCards' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - memoryCards'/></a>
                            </div>
                        </div>
                        <div className="container">
                            <div>
                                <h3>My Portfolio</h3>
                                <img src={require('./myPortfolio.png')} alt='myPortfolio thumb '/>
                                <p>This is the page you're at. Take a look, how it's made. React.JS + CSS animations</p>
                            </div>
                            <div className="buttons">
                                <a href='https://portfolio-42c10.web.app' target='_blank' rel="noreferrer" ><img src={require('./web.png')} alt='Portfolio - URL'/></a>
                                <a href='https://github.com/ant-st/myPortfolio' target='_blank' rel="noreferrer" ><img src={require('./ghlogo.png')} alt='Link to GH - Portfolio'/></a>
                            </div>
                        </div>
                    </section>
                </section>
    )

};
