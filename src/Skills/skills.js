import React, {useState, useEffect} from "react";
import './skills.css'

const desHTML = (
    <div>
        <p>Znajomość HTML to podstawa. Jestem biegły w użyciu HTMLv5.</p>
        <p>Wybrane umiejętności:</p>
        <ul>
            <li>Projektowanie struktury strony internetowej</li>
            <li>Prezentacja danych w tabelach</li>
            <li>Tworzenie formularzy i walidacja wprowadzanych danych</li>
            <li>Stosowanie właściwych znaczników semantycznych</li>
        </ul>
    </div>
);

const desJS = (
    <div>
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
    </div>
);

const desCSS = (
    <div>
        <p>CSS pozwala na piękną stylizację strony. Bardzo duży zakres mojego szkolenia poświęcony był temu zagadnieniu.</p>
        <p>Wybrane umiejętności:</p>
        <ul>
            <li>Tworzenie wyjątkowych designów stron</li>
            <li>Używanie flexbox i grid</li>
            <li>Tranzycje i animacje</li>
            <li>Responsywność - dopasowanie strony do urządzeń mobilnych i niestandardowych ekranów</li>
        </ul>
    </div>
)

const desReact = (
    <div>
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
    </div>
)

const desNode = (
    <div>
        <p>Przy pomocy Node.js jestem w stanie zbudować także back-endową część aplikacji.</p>
        <p>Wybrane umiejętności:</p>
        <ul>
            <li>Połączenie front-endu z back-endem</li>
            <li>Instalacja wymaganych bibliotek</li>
            <li>Tworzenie serwerów przy pomocy Express.js</li>
            <li>Tworzenie własnych oraz korzystanie z REST API, w tym używanie Express.Router oraz tworzenie middleware</li>
            <li>Integracja z bazami danych SQLite</li>
        </ul>
    </div>
)

const desNPM = (
    <div>
        <p>Aktywne korzystanie z NPM pozwala na szybkie odnalezenie i użycie zewnętrznych bibliotek.</p>
        <p>Wybrane umiejętności:</p>
        <ul>
            <li>Czytanie dokumentacji deweloperskiej</li>
            <li>Konfiguracja plików package.json</li>
            <li>Kontrola wersji używanych pakietów</li>
        </ul>
    </div>
)

const desAlly = (
    <div>
        <p>Jestem zaznajomiony z projektem A11y, gwarantującym pełny dostęp i przejrzystość dla osób z utrudnieniami.</p>
        <p>Wybrane umiejętności:</p>
        <ul>
            <li>Prawidłowe dobieranie kolorów i kontrastów na stronie</li>
            <li>Przystosowanie strony do obsługi bez myszy</li>
            <li>Używanie tagów ARIA</li>
            <li>Przystosowanie aplikacji do oprogramowania czytającego</li>
        </ul>
    </div>
)

const desGit = (
    <div>
        <p>W moich projektach aktywnie używam systemu kontroli wersji GIT.</p>
        <p>Wybrane umiejętności:</p>
        <ul>
            <li>Konfiguracja GIT w nowo powstałym projekcie</li>
            <li>Regularne tworzenie commitów z jasnymi opisami</li>
            <li>Znajomość komend terminalowych, m.in. do przywrócenia poprzedniej wersji</li>
            <li>Praca na gałęziach obcych projektów, praca zespołowa i wysyłanie Pull Requestów</li>
            <li>Używanie platofrmy GitHub</li>
        </ul>
    </div>
)

const desTerminal = (
    <div>
        <p>Na co dzień pracuję na systemie macOS. Podczas studiów regularnie używałem systemu Linux.</p>
        <p>Wybrane umiejętności:</p>
        <ul>
            <li>Znajomość komend terminalowych</li>
            <li>Znajomość uprawnień w systemach unixowych</li>
            <li>Biegła obsługa systemu Linux i macOS</li>
        </ul>
    </div>
)

const desDefault = (
    <div>
        <p>Naciśnij na ikonę poniżej, by poznać szczegóły.</p>
    </div>
)

export const Skills = () => {
    const [skill, setSkill] = useState();
    const [content, setContent] = useState(desDefault);

    const handleClick = ({target}) => {
        target.className = 'activeIcon';
        setSkill(target.id);
    }

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
    },[skill]);

    return (
        <section id="skills">
            <div id="description">
                {content}
            </div>
            <div id="logos">
                <img src={require('./html.png')} alt="HTML Logo" id="iconHTML" onClick={handleClick}/>
                <img src={require('./css.png')} alt="CSS Logo" id="iconCSS" onClick={handleClick}/>
                <img src={require('./javascript.png')} alt="JS Logo" id="iconJS" onClick={handleClick}/>
                <img src={require('./react.png')} alt="React Logo" id="iconReact" onClick={handleClick}/>
                <img src={require('./node.png')} alt="Node Logo" id="iconNode" onClick={handleClick}/>
                <img src={require('./npm.png')} alt="NPM Logo" id="iconNPM" onClick={handleClick}/>
                <img src={require('./a11y.png')} alt="A11Y Logo" id="iconAlly" onClick={handleClick}/>
                <img src={require('./git.png')} alt="GIT Logo" id="iconGit" className='black' onClick={handleClick}/>
                <img src={require('./terminal.png')} alt="Terminal Logo" id="iconTerminal" className='black' onClick={handleClick}/>
            </div>
        </section>
    )
}