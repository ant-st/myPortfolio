import React, {useState, useEffect} from "react";
import './App.css';
import {Education} from "../Education/education";
import {Skills} from "../Skills/skills";
import {Portfolio} from "../Portfolio/portfolio";
import {Home} from "../Home/home";
import AOS from 'aos';

function App() {
    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

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
                return <Portfolio/>;
            default:
                return <Home/>;
        }
    }

  return (
    <div className="App">
        <header className="App-header">
            <h1 onClick={handleClick} id='navHome'>Antoni Sarnowski-Trypka</h1>
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
            <a href="https://ant-st.github.com" target="_blank" rel="noopener noreferrer" ><img src={require('./ghlogo.png')} alt="GitHub logo"/></a>
            <a href="https://www.linkedin.com/in/antoni-sarnowski-trypka-268079263/" target="_blank" rel="noopener noreferrer" ><img src={require('./linkedlogo.png')} alt="LinkedIn logo"/></a>
            <a href="mailto:antsarnow@gmail.com" target="_blank" rel="noopener noreferrer" ><img src={require('./mailicon.png')} alt="Mail icon"/></a>
        </section>
        <section id="content">
            {renderPage()}
        </section>
        <section id="contactMobile">
            <a href="https://ant-st.github.com" target="_blank" rel="noopener noreferrer" ><img src={require('./ghlogo.png')} alt="GitHub logo"/></a>
            <a href="https://www.linkedin.com/in/antoni-sarnowski-trypka-268079263/" target="_blank" rel="noopener noreferrer" ><img src={require('./linkedlogo.png')} alt="LinkedIn logo"/></a>
            <a href="mailto:antsarnow@gmail.com" target="_blank" rel="noopener noreferrer" ><img src={require('./mailicon.png')} alt="Mail icon"/></a>
        </section>
    </div>
  );
}

export default App;
