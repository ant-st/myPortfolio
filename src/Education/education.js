import React from "react";
import './education.css'

export const Education = () => {
    return (
        <section className="education" data-aos="fade-down">
            <section id="codecademy">
                <img src={require('./codelogo.png')} alt="Logo codecademy" id="codelogo"/>
                <p>Pod koniec 2022 roku rozpocząłem naukę w kierunku Front-End Developera na amerykańskiej platformie Codecademy.</p>
                <p>Ukończyłem następujące kursy:</p>
                <ul>
                    <li><a href="https://www.codecademy.com/learn/paths/web-development" target="_blank" rel="noopener noreferrer">ścieżka umiejętności "Web Development" - 11.2022 -> 02.2023</a></li>
                    <li>ścieżka kariery "Front-End Developer" - 11.2022 -> 04.2023</li>
                    <li>kurs "Learn Vue.js"</li>
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
        </section>
    )
}