import React, {useState} from "react";
import './App.css';
import {Education} from "../Education/education";
import {Skills} from "../Skills/skills";

function App() {
    const [page, setPage] = useState();
    const handleClick = ({target}) => {
        setPage(target.id);
    }

    const renderPage = () => {
        switch (page) {
            case 'navEdu':
                return <Education/>
            case 'navSkill':
                return <Skills/>
            case 'navPort':
                return ' ';
            default:
                return ' ';
        }
    }

  return (
    <div className="App">
        <header className="App-header">
            <h1>Antoni Sarnowski-Trypka</h1>
            <nav className="navBar">
                <ul>
                    <li id="navEdu" onClick={handleClick}>Edukacja</li>
                    <li id="navSkill" onClick={handleClick}>Umiejętności</li>
                    <li id="navPort" onClick={handleClick}>Portfolio</li>
                    <li>🇵🇱</li>
                </ul>
            </nav>
        </header>
        <section id="contact">
            <a href="https://ant-st.github.com" target="_blank"><img src={require('./ghlogo.png')} alt="GitHub logo"/></a>
            <a href="https://www.linkedin.com/in/antoni-sarnowski-trypka-268079263/" target="_blank"><img src={require('./linkedlogo.png')} alt="LinkedIn logo"/></a>
            <a href="mailto:antsarnow@gmail.com" target="_blank"><img src={require('./mailicon.png')} alt="Mail icon"/></a>
        </section>
        <section id="content">
            {renderPage()}
        </section>
    </div>
  );
}

export default App;
