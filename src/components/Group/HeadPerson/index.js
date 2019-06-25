import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'react-emoji-render';

const HeadPerson = ({ type, href, average, first_name, last_name, photo, email, title, emojii }) => {
    const userPhoto = photo ?
        <img src={photo} alt={`${first_name} ${last_name}`} /> :
        <Emoji text={'👤'} className="group__head-person-photo-emojii" />;

    const averageBall = type === 'best' ?
        <p className="group__head-person-average">
            Средний балл:
             <span className="average-ball">{average}
                <Emoji text={`🔥`} className="emojii" />
            </span>
        </p>
        : "";

    return (
        <div className="group__head-person-wrapper">
            <Emoji text={`${title} ${emojii}`} className="group__head-person-title" />
            <Link to={href} className="group__head-person">
                <div className="group__head-person-photo">
                    {userPhoto}
                </div>
                <p className="group__head-person-name">{first_name + ' ' + last_name}</p>
                <p className="group__head-person-email">Контакты: <span className="data">{email}</span></p>
                {averageBall}
            </Link>
        </div>
    );
}

export default HeadPerson;