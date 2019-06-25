import React from 'react';
import Button from '../Button';

import './signUpSuccessfully.sass'

const SignUpSuccessfullyPage = () => {
    return (
        <div className="successfull container">
            <h1 className="successfull__heading">Вы успешно зарестрировались!</h1>
            <p className="successfull__paragraph"></p>
            <Button text={'Войти'} type="link" href="/login" blueWhite />
        </div>
    )
}

export default SignUpSuccessfullyPage;