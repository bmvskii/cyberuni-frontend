import React from 'react';
import Button from '../../../components/Button';

const Hero = () => {
    return (
        <div className="hero__wrapper">
            <div className="hero container">
                <h1 className="hero__heading">Университет<span className="blue">будущего</span> уже здесь.</h1>
                <p className="para hero__para">СyberUni - уникальная платформа, способная упростить обучение и сделать его более удобным и увлекательным.</p>
                <Button text={"Начать"} blueWhite type='link' href='/login' />
            </div>
        </div>
    );
}

export default Hero;