import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'react-emoji-render';


import './student.sass'

const Student = (props) => {
    const { _id, email, first_name, last_name, photo } = props;
    const userPhoto = photo ?
        <img src={photo} className="student__photo-inner" alt={`${first_name} ${last_name}`} /> :
        <Emoji text={'👤'} className="student__photo-emojii" />;

    return (
        <Link to={`/students/${_id}`} className="student">
            <div className="student__photo">
                {userPhoto}
            </div>
            <p className="student__name">{`${first_name} ${last_name}`}</p>
            <p className="student__email">Контакты: <span className="data">{email}</span></p>
        </Link>
    );
}

export default Student;