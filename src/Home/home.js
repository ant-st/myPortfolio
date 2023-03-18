import React from 'react';
import './home.css';

export const Home = (props) => {
    return (
        <section id="home">
            {props.polish ? (
                <div>
                    <h2>Cześć!</h2>
                    <p>Mam na imię Antoni i jestem programistą.</p>
                    <p>W wolnym czasie kocham podróżować razem z żoną i naszym pieskiem.</p>
                    <p>Pasjonuję się motoryzacją i lotnictwem.</p>
                    <h2>Poznajmy się lepiej!</h2>
                </div>) :
                (<div>
                    <h2>Hi there!</h2>
                    <p>My name is Antoni and I am developer from Poland.</p>
                    <p>In my free time I love travelling with my wife and our adopted dog.</p>
                    <p>I am keen on cars and aviation.</p>
                    <h2>Let's get to know each other!</h2>
                </div>)
            }
            <img src={require('./antek.jpeg')} alt="Author"/>
        </section>
    )
}
