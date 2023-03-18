import logo from '../logo.svg';
import './App.css';
import {Education} from "../Education/education";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>Antoni Sarnowski-Trypka</h1>
            <nav>
                <ul>
                    <li>Edukacja</li>
                    <li>Umiejętności</li>
                    <li>Portfolio</li>
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
            <Education/>
        </section>
    </div>
  );
}

export default App;
