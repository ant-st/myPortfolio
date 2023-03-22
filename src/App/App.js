import React, {useEffect} from "react";
import './App.css';
import {Education, EducationEN} from "../Education/education";
import {Skills, SkillsEN} from "../Skills/skills";
import {Portfolio, PortfolioEN} from "../Portfolio/portfolio";
import {Home, HomeEN} from "../Home/home";
import AOS from 'aos';
import {RouterProvider, createRoutesFromElements, Route, createBrowserRouter, Outlet, NavLink, Link} from "react-router-dom";
import ErrorPage from "../errorPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element= {<Root/>} errorElement={<ErrorPage/>}>
                <Route path="/" index element={<Home/>}/>
                <Route path="edu" index element={<Education/>}/>
                <Route path="skills" index element={<Skills/>}/>
                <Route path="port" index element={<Portfolio/>}/>
            </Route>
            <Route path="/en" element= {<RootEN/>} errorElement={<ErrorPage/>}>
        <Route path="" index element={<HomeEN/>}/>
        <Route path="edu" index element={<EducationEN/>}/>
        <Route path="skills" index element={<SkillsEN/>}/>
        <Route path="port" index element={<PortfolioEN/>}/>
    </Route>
        </Route>
    ));

function Root() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 id='navHome'><Link to="/">Antoni Sarnowski-Trypka</Link></h1>
                <nav className="navBar">
                    <ul>
                        <li id="navEdu"><NavLink to="edu">Edukacja</NavLink></li>
                        <li id="navSkill"><NavLink to="skills">Umiejętności</NavLink></li>
                        <li id="navPort"><NavLink to="port">Portfolio</NavLink></li>
                        <li><Link to="en">🇬🇧</Link></li>
                    </ul>
                </nav>
            </header>
            <section id="contact">
                <a href="https://github.com/ant-st" target="_blank" rel="noopener noreferrer" ><img src={require('./ghlogo.png')} alt="GitHub logo"/></a>
                <a href="https://www.linkedin.com/in/antoni-sarnowski-trypka-268079263/" target="_blank" rel="noopener noreferrer" ><img src={require('./linkedlogo.png')} alt="LinkedIn logo"/></a>
                <a href="mailto:antsarnow@gmail.com" target="_blank" rel="noopener noreferrer" ><img src={require('./mailicon.png')} alt="Mail icon"/></a>
            </section>
            <section id="content">
                <Outlet/>
            </section>
            <section id="contactMobile">
                <a href="https://github.com/ant-st" target="_blank" rel="noopener noreferrer" ><img src={require('./ghlogo.png')} alt="GitHub logo"/></a>
                <a href="https://www.linkedin.com/in/antoni-sarnowski-trypka-268079263/" target="_blank" rel="noopener noreferrer" ><img src={require('./linkedlogo.png')} alt="LinkedIn logo"/></a>
                <a href="mailto:antsarnow@gmail.com" target="_blank" rel="noopener noreferrer" ><img src={require('./mailicon.png')} alt="Mail icon"/></a>
            </section>
        </div>
    )
}

function RootEN() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 id='navHome'><Link to="">Antoni Sarnowski-Trypka</Link></h1>
                <nav className="navBar">
                    <ul>
                        <li id="navEdu"><NavLink to="edu">Education</NavLink></li>
                        <li id="navSkill"><NavLink to="skills">Skills</NavLink></li>
                        <li id="navPort"><NavLink to="port">Portfolio</NavLink></li>
                        <li><Link to="/">🇵🇱</Link></li>
                    </ul>
                </nav>
            </header>
            <section id="contact">
                <a href="https://github.com/ant-st" target="_blank" rel="noopener noreferrer" ><img src={require('./ghlogo.png')} alt="GitHub logo"/></a>
                <a href="https://www.linkedin.com/in/antoni-sarnowski-trypka-268079263/" target="_blank" rel="noopener noreferrer" ><img src={require('./linkedlogo.png')} alt="LinkedIn logo"/></a>
                <a href="mailto:antsarnow@gmail.com" target="_blank" rel="noopener noreferrer" ><img src={require('./mailicon.png')} alt="Mail icon"/></a>
            </section>
            <section id="content">
                <Outlet/>
            </section>
            <section id="contactMobile">
                <a href="https://github.com/ant-st" target="_blank" rel="noopener noreferrer" ><img src={require('./ghlogo.png')} alt="GitHub logo"/></a>
                <a href="https://www.linkedin.com/in/antoni-sarnowski-trypka-268079263/" target="_blank" rel="noopener noreferrer" ><img src={require('./linkedlogo.png')} alt="LinkedIn logo"/></a>
                <a href="mailto:antsarnow@gmail.com" target="_blank" rel="noopener noreferrer" ><img src={require('./mailicon.png')} alt="Mail icon"/></a>
            </section>
        </div>
    )
}


function App() {
    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

  return (
        <RouterProvider router={router} />
  );
}

export default App;
