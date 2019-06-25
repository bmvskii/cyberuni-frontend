import React from 'react';
import Button from '../Button';

const NotFoundPage = (wrongUrl) => {
    return (
        <div className="not-found-page">
            <h1 className="not-found-page__heading">404</h1>
            <p className="not-found-page__description">Страница не найдена</p>
            <Button blueWhite type="link" href="/" text={"На главную"}/>
        </div>
    );
}

export default NotFoundPage;