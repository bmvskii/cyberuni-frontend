import React from 'react';
import Button from '../../Button';

import Input from './Input'

import './signUpForm.sass'

const SignUpForm = ({ onClickHandler, onChangeHandler, errors, onFocusHandler }) => {
    const { first_name, last_name, email, password } = errors;

    return (
        <form className="sign-up__form">
            <h2 className="h2 sign-up__heading">Регистрация</h2>
            <Input
                labelText={"Имя"} 
                // errorText={first_name.msg}
                // errorStatus={first_name.status}
                onChangeHandler={onChangeHandler}
                onFocusHandler={onFocusHandler}
                placeholder={"Введите имя"}
                type={"text"} name={"first_name"}
            />
            <Input
                labelText={"Фамилия"} errorText={""}
                onChangeHandler={onChangeHandler}
                placeholder={"Введите фамилию"}
                type={"text"} name={"last_name"}
            />
            <Input
                labelText={"Почта"} errorText={""}
                onChangeHandler={onChangeHandler}
                placeholder={"Введите почту"}
                type={"email"} name={"email"}
            />
            <Input
                labelText={"Пароль"} errorText={""}
                onChangeHandler={onChangeHandler}
                placeholder={"Введите пароль"}
                type={"password"} name={"password"}
            />
            <Input
                labelText={"Повторно пароль"} errorText={""}
                onChangeHandler={onChangeHandler}
                placeholder={"Введите пароль повторно"}
                type={"password"} name={"double_password"}
            />
            <Button
                text={"Зарегистрироваться"}
                blueWhite
                onClickHandler={onClickHandler}
            />
        </form>
    );
}

export default SignUpForm;