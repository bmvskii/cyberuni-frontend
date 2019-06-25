import React from 'react';
import Emoji from 'react-emoji-render';
import { Link } from 'react-router-dom';

import NureLogo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="footer__wrapper">
            <div className="footer container">
                <a className="footer__logo" href="https://nure.ua">
                    <img src={NureLogo} alt="Nure" />
                </a>
                <div className="footer__links">
                    <Link className="footer__link" to="/me/profile">
                        <span className="footer__link-text">Мой кабинет</span>
                    </Link>
                    <Link className="footer__link" to="/me/todos">
                        <span className="footer__link-text">Мои задачи</span>
                    </Link>
                    <Link className="footer__link" to="/me/progress">
                        <span className="footer__link-text">Мой прогресс</span>
                    </Link>
                    <Link className="footer__link" to="/me/group">
                        <span className="footer__link-text">Моя группа</span>
                    </Link>
                    <Link className="footer__link" to="/me/subjects">
                        <span className="footer__link-text">Мои предметы</span>
                    </Link>
                    <Link className="footer__link" to="/me/teachers">
                        <span className="footer__link-text">Мои преподаватели</span>
                    </Link>
                </div>
                <div className="footer__copyright">
                    <Emoji text={'💘 Made with love by Yevhenii Rogovoy'} className="footer__" />
                </div>
            </div>
        </footer>
    )
};

export default Footer;