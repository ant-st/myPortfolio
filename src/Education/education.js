import React from "react";
import './education.css'

export const Education = (props) => {
    return (
        <section>
        {props.polish ? (
            <section className="education" data-aos="fade-down">
                <section id="codecademy">
                    <img src={require('./codelogo.png')} alt="Logo codecademy" id="codelogo"/>
                    <p>Pod koniec 2022 roku rozpocząłem naukę w kierunku Front-End Developera na amerykańskiej platformie Codecademy.</p>
                    <p>Ukończyłem następujące kursy:</p>
                    <ul>
                        <li><a href="https://www.codecademy.com/learn/paths/web-development" target="_blank" rel="noopener noreferrer">ścieżka umiejętności "Web Development" - 11.2022 -> 02.2023</a></li>
                        <li>ścieżka kariery "Front-End Developer" - 11.2022 -> 04.2023</li>
                    </ul>
                    <p>Kurs pozwolił mi nabyć umiejętności niezbędne do kompleksowego budowania własnych stron internetowych i aplikacji.</p>
                    <p>Szczegółowy zakres materiału dostępny jest po naciśnięciu na ww. nazwę kursu.</p>
                    <div id="certificates">
                        <img src={require('./WDCert.png')} alt="WebDev certificate"/>
                    </div>
                </section>
                <section id="pwr">
                    <img src={require('./pwr.jpeg')} alt="Logo politechniki" id="pwrlogo"/>
                    <p>W latach 2018-2021 uczęszczałem na Politechnikę Wrocławską. <br/>Studiowałem Telekomunikację na Wydziale Elektroniki. </p>
                    <p>Podczas studiów realizowałem takie kursy, jak:</p>
                    <ul>
                        <li>"Podstawy Programowania" (wprowadzenie do C++)</li>
                        <li>"Programowanie Obiektowe" (zaawansowany C++ i OOP)</li>
                        <li>"Sieci Komputerowe" (budowa i bezpieczeństwo sieci LAN i stron internetowych)</li>
                        <li>"Chmury Obliczeniowe" (Docker)</li>
                        <li>"Systemy operacyjne" (Operacje w terminalu i system Linux)</li>
                    </ul>
                    <p>Dobre wyniki, aktywne życie studenckie i średnia ocen ponad 5.0 pozwoliły mi uzyskać Stypendium Rektora na czas dwóch ostatnich semestrów.</p>
                </section>
                <section id="work">
                    <p>W marcu 2021 roku założyłem własną działalność gospodarczą zajmującą się systemami zabezpieczeń w domach i firmach - od wyceny, przez montaż i programowanie, po konserwacje.</p>
                    <p>Prowadzenie firmy nauczyło mnie m.in. organizacji własnego czasu, kontaktu i negocjacji z Klientem, prowadzenia działalności oraz pracy pod presją.</p>
                    <p>Indywidualne podejście do Klienta oraz wiedza branżowa pozwoliły mi zyskać tytuł „Najlepszej Firmy” 2021 i 2022 wg portalu Oferteo.</p>
                </section>
            </section>)
            :
            (<section className="education" data-aos="fade-down">
                <section id="codecademy">
                    <img src={require('./codelogo.png')} alt="Logo codecademy" id="codelogo"/>
                    <p>By the end of 2022 I have started learning front-end development on American platform Codecademy.</p>
                    <p>By now, I have successfully finished:</p>
                    <ul>
                        <li><a href="https://www.codecademy.com/learn/paths/web-development" target="_blank" rel="noopener noreferrer">"Web Development" Skill Path - 11.2022 -> 02.2023</a></li>
                        <li>"Front-End Developer" Career Path- 11.2022 -> 04.2023</li>
                    </ul>
                    <p>The courses have provided me enough knowledge and skills necessary to start deploying my own websites and applications.</p>
                    <p>Detailed syllabus of courses I have completed is available upon clicking on its name.</p>
                    <div id="certificates">
                        <img src={require('./WDCert.png')} alt="WebDev certificate"/>
                    </div>
                </section>
                <section id="pwr">
                    <img src={require('./pwr.jpeg')} alt="Logo politechniki" id="pwrlogo"/>
                    <p>In 2018-2021 I was enrolled on Wroclaw University of Science and Technology. <br/>I have studied Telecommunications on Electronics Faculty. </p>
                    <p>During my studies I have completed, among others, the following courses:</p>
                    <ul>
                        <li>"The Principals Of Programming" (introduction to C++)</li>
                        <li>"Object-Oriented Programming" (advanced C++ & OOP)</li>
                        <li>"LAN networks" (setting up LAN networks and configuring their safety)</li>
                        <li>"Cloud Services" (Docker)</li>
                        <li>"Operating Systems" (Operating in terminal + Linux)</li>
                    </ul>
                    <p>Having achieved one of the highest grades on my faculty, I was awarded with Rector's Scholarship for my final 2 semesters.</p>
                </section>
                <section id="work">
                <p>March 2021 was the time when I have decided to set up my own company, in which I have been working as a security systems complex installer - from calculating the offer, through programming and installing the devices, up to maintenance. </p>
                <p>Running my own business has taught me how to deal with customers, even the challenging ones, how to manage my own time, work under-pressure and how to be self-sufficient.</p>
                <p>My attitude to end-customers rewarded in our company winning the "The Best Installer" award in 2021 and 2022 organised by Oferteo website.</p>
                </section>
            </section>)}
        </section>
    )
}