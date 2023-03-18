import React from 'react';
import './home.css';

export const Home = () => {
    return (
        <section id="home">
            <div>
                <h2>Cześć!</h2>
                <p>Mam na imię Antoni i jestem programistą.</p>
                <p>W wolnym czasie kocham podróżować razem z żoną i naszym pieskiem.</p>
                <p>Pasjonuję się motoryzacją i lotnictwem.</p>
                <h2>Poznajmy się lepiej!</h2>
            </div>
            <img src={require('./antek.jpeg')} alt="Author"/>
        </section>
    )
}
