import React, {useState, useEffect} from "react";
import './skills.css'

export const Skills = (props) => {


    const desHTML = (
    <div>
        {props.polish ?
            (<div>
                <p>Znajomość HTML to podstawa. Jestem biegły w użyciu HTMLv5.</p>
                <p>Wybrane umiejętności:</p>
                <ul>
                    <li>Projektowanie struktury strony internetowej</li>
                    <li>Prezentacja danych w tabelach</li>
                    <li>Tworzenie formularzy i walidacja wprowadzanych danych</li>
                    <li>Stosowanie właściwych znaczników semantycznych</li>
                </ul>
            </div>) : (<div>
                <p>Knowledge of HTML is a must. I am proficient in usage of HTMLv5.</p>
                <p>Some of my skills:</p>
                <ul>
                    <li>Blueprinting the website's structure</li>
                    <li>Displaying data in tables</li>
                    <li>Creating forms and validating them</li>
                    <li>Using proper semantics</li>
                </ul>
            </div>)
    }
    </div>
    );

    const desJS = (
        <div>
            {props.polish ?
                (<div>
                    <p>Potrafię używać JavaScript zarówno do stworzenia dynamicznych stron internetowych, jak i do zbudowania zaawansowanych aplikacji.</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Używanie klas, obiektów, dziedziczenia</li>
                        <li>Programowanie asynchroniczne - korzystanie z funkcji async/await</li>
                        <li>Rozumienie i używanie takich konceptów, jak currying, hoisting, concurrency</li>
                        <li>Znajomość składni JS ES6, w tym arrow functions, Promises, fetch</li>
                        <li>Znajomość DOM oraz event handlerów</li>
                        <li>Programowanie zgodnie z metodą Test-Driven Development, pisanie własnych testów przy pomocy bibliotek Mocha i Chai</li>
                    </ul>
                </div>) : (<div>
                    <p>I am familliar with JavaScript, both adding logic to simple webistes and programming advanced web apps.</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>Fluent usage of classes, objects, passing</li>
                        <li>Asynchronous programming - using async/await</li>
                        <li>Understanding and proper implementing currying, hoisting, concurrency</li>
                        <li>Knowledge of JS ES6 syntax, including arrow functions, Promises, fetch</li>
                        <li>Knowledge of DOM and event handlers</li>
                        <li>Capability of Test-Driven Development programming, writing my own tests using Mocha & Chai</li>
                    </ul>
                </div>)
            }
        </div>

    );

    const desCSS = (
        <div>
            {props.polish ?
                (<div>
                    <p>CSS pozwala na piękną stylizację strony. Bardzo duży zakres mojego szkolenia poświęcony był temu zagadnieniu.</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Tworzenie wyjątkowych designów stron</li>
                        <li>Używanie flexbox i grid</li>
                        <li>Tranzycje i animacje</li>
                        <li>Responsywność - dopasowanie strony do urządzeń mobilnych i niestandardowych ekranów</li>
                    </ul>
                </div>) : (<div>
                    <p>CSS lets us create beautiful websites. There was a lot of pressure put on this subject during my education.</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>Creating unique and trendy outfits</li>
                        <li>Using flexbox & grid</li>
                        <li>Transitions and animations</li>
                        <li>Responsiveness - making sure the app works properly on different browsers and various screens</li>
                    </ul>
                </div>)
            }
        </div>
    )

    const desReact = (
        <div>
            {props.polish ?
                (<div>
                    <p>React jest preferowaną przeze mnie biblioteką front-endową. Ta strona również stworzona jest przy pomocy React.js</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Znajomość JSX</li>
                        <li>Tworzenie własnych komponentów zarówno przy pomocy klas, jak i funkcji</li>
                        <li>Używanie komponentów obcych przy pomocy dokumentacji</li>
                        <li>Używanie React Hooks (m.in state, effect) i dziedziczenie atrybutów między komponentami</li>
                        <li>Korzystanie z React Development Tools</li>
                        <li>Budowanie statycznych wersji aplikacji gotowych do opublikowania</li>
                    </ul>
                </div>) : (<div>
                    <p>React.JS is my favorite front-end framework. This page is also made using React.JS</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>Knowledge of JSX</li>
                        <li>Creating new class and function components</li>
                        <li>Implementing and using third-party components thanks to documentation</li>
                        <li>Using React Hooks (eg. state, effect) and passing the props to components</li>
                        <li>Usage of React Development Tools</li>
                        <li>Building static versions ready to be deployed</li>
                    </ul>
                </div>)
            }
        </div>

    )

    const desNode = (
        <div>
            {props.polish ?
                (<div>
                    <p>Przy pomocy Node.js jestem w stanie zbudować także back-endową część aplikacji.</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Połączenie front-endu z back-endem</li>
                        <li>Instalacja wymaganych bibliotek</li>
                        <li>Tworzenie serwerów przy pomocy Express.js</li>
                        <li>Tworzenie własnych oraz korzystanie z REST API, w tym używanie Express.Router oraz tworzenie middleware</li>
                        <li>Integracja z bazami danych SQLite</li>
                    </ul>
                </div>) : (<div>
                    <p>My knowledge of Node.js makes me capable of creating the back-end of majority of apps.</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>Connecting front-end to back-end</li>
                        <li>Installing new frameworks</li>
                        <li>Setting up servers using Express.js</li>
                        <li>Creating and maintaining REST API, including middleware + routing</li>
                        <li>SQLite3 integration</li>
                    </ul>
                </div>)
            }
        </div>

    )

    const desNPM = (
        <div>
            {props.polish ?
                (<div>
                    <p>Aktywne korzystanie z NPM pozwala na szybkie odnalezenie i użycie zewnętrznych bibliotek.</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Czytanie dokumentacji deweloperskiej</li>
                        <li>Konfiguracja plików package.json</li>
                        <li>Kontrola wersji używanych pakietów</li>
                    </ul>
                </div>) : (<div>
                    <p>Working with NPM lets me quickly find necessary libraries.</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>Reading developer's documentation</li>
                        <li>Configuration of package.json</li>
                        <li>Keeping crucial frameworks up to date</li>
                    </ul>
                </div>)
            }
        </div>
    )

    const desAlly = (
        <div>
            {props.polish ?
                (<div>
                    <p>Jestem zaznajomiony z projektem A11y, gwarantującym pełny dostęp i przejrzystość dla osób z utrudnieniami.</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Prawidłowe dobieranie kolorów i kontrastów na stronie</li>
                        <li>Przystosowanie strony do obsługi bez myszy</li>
                        <li>Używanie tagów ARIA</li>
                        <li>Przystosowanie aplikacji do oprogramowania czytającego</li>
                    </ul>
                </div>) : (<div>
                    <p>I am familiar with A11y project, created to make sure people with incapabilities are able to freely use my apps.</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>Proper choice of color and contrast in my projects</li>
                        <li>Preparing the website not to need the mouse</li>
                        <li>Using ARIA tags</li>
                        <li>Making the apps understandable for VoiceOver and Reader SW</li>
                    </ul>
                </div>)
            }
        </div>

    )

    const desGit = (
        <div>
            {props.polish ?
                (<div>
                    <p>W moich projektach aktywnie używam systemu kontroli wersji GIT.</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Konfiguracja GIT w nowo powstałym projekcie</li>
                        <li>Regularne tworzenie commitów z jasnymi opisami</li>
                        <li>Znajomość komend terminalowych, m.in. do przywrócenia poprzedniej wersji</li>
                        <li>Praca na gałęziach obcych projektów, praca zespołowa i wysyłanie Pull Requestów</li>
                        <li>Używanie platofrmy GitHub</li>
                    </ul>
                </div>) : (<div>
                    <p>I am constantly using GIT version control system during my work.</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>GIT configuration in new project</li>
                        <li>Committing regularly with simple messages</li>
                        <li>Knowledge of terminal commands</li>
                        <li>Working on other devs' branches, teamwork, proper Pull Requesting</li>
                        <li>Usage of GitHub</li>
                    </ul>
                </div>)
            }
        </div>

    )

    const desTerminal = (
        <div>
            {props.polish ?
                (<div>
                    <p>Na co dzień pracuję na systemie macOS. Podczas studiów regularnie używałem systemu Linux.</p>
                    <p>Wybrane umiejętności:</p>
                    <ul>
                        <li>Znajomość komend terminalowych</li>
                        <li>Znajomość uprawnień w systemach unixowych</li>
                        <li>Biegła obsługa systemu Linux i macOS</li>
                    </ul>
                </div>) : (<div>
                    <p>Normally I use macOS. During my studies I got familiar with Linux.</p>
                    <p>Some of my skills:</p>
                    <ul>
                        <li>Vast knowledge of command line</li>
                        <li>Understanding UNIX-systems' authorisation</li>
                        <li>Proficient usage of Linux and MacOS</li>
                    </ul>
                </div>)
            }
        </div>
    )

    const desDefault = (
        <div>
            {props.polish ?
            <p>Naciśnij na ikonę poniżej, by poznać szczegóły.</p> :
                <p>Press an icon below to read more.</p>
            }
        </div>
    )

    const [skill, setSkill] = useState();
    const [content, setContent] = useState(desDefault);

    const handleClick = ({target}) => {
        target.className = 'activeIcon';
        setSkill(target.id);
    }

    useEffect(() => {
        setContent(desDefault);
        // eslint-disable-next-line
    },[props]);

    useEffect(() => {
        switch (skill) {
            case 'iconHTML':
                setContent(desHTML);
                break;
            case 'iconCSS':
                setContent(desCSS);
                break;
            case 'iconJS':
                setContent(desJS);
                break;
            case 'iconReact':
                setContent(desReact);
                break;
            case 'iconNode':
                setContent(desNode);
                break;
            case 'iconNPM':
                setContent(desNPM);
                break;
            case 'iconAlly':
                setContent(desAlly);
                break;
            case 'iconGit':
                setContent(desGit);
                break;
            case 'iconTerminal':
                setContent(desTerminal);
                break;
            default:
                setContent(desDefault);
                break;
        }
        // eslint-disable-next-line
    },[skill]);

    return (
        <section id="skills" data-aos="fade-down">
            <div id="description">
                {content}
            </div>
            <div id="logos">
                <img className="inactive" src={require('./html.png')} alt="HTML Logo" id="iconHTML" onClick={handleClick} />
                <img className="inactive" src={require('./css.png')} alt="CSS Logo" id="iconCSS" onClick={handleClick} />
                <img className="inactive" src={require('./javascript.png')} alt="JS Logo" id="iconJS" onClick={handleClick} />
                <img className="inactive" src={require('./react.png')} alt="React Logo" id="iconReact" onClick={handleClick} />
                <img className="inactive" src={require('./node.png')} alt="Node Logo" id="iconNode" onClick={handleClick} />
                <img className="inactive" src={require('./npm.png')} alt="NPM Logo" id="iconNPM" onClick={handleClick} />
                <img className="inactive" src={require('./a11y.png')} alt="A11Y Logo" id="iconAlly" onClick={handleClick} />
                <img className="inactive black" src={require('./git.png')} alt="GIT Logo" id="iconGit"  onClick={handleClick} />
                <img className="inactive black" src={require('./terminal.png')} alt="Terminal Logo" id="iconTerminal"  onClick={handleClick} />
            </div>
        </section>
    )
}