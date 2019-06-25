import React from 'react';
import Button from '../../Button';

import './loginForm.sass'

const LoginForm = ({ onClickHandler, onChangeHandler }) => {
    return (
        <form className="login__form" >
            <h2 className="h2 login__heading">Авторизация</h2>
            <label className="login__label">
                <span className="login__text">Почта :</span>
                <input
                    type="email"
                    name="email"
                    className="login__input"
                    onChange={onChangeHandler}
                    placeholder="Введите почту" />
                <div className="error-field"></div>
            </label>
            <label className="login__label">
                <span className="login__text">Пароль :</span>
                <input
                    type="password"
                    name="password"
                    className="login__input"
                    onChange={onChangeHandler}
                    placeholder="Введите пароль" />
                <div className="error-field"></div>
            </label >
            <Button
                text={"Войти"}
                blueWhite
                onClickHandler={onClickHandler}
            />
        </form>
    );
}

export default LoginForm;