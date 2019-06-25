import React from 'react';
import Button from '../../../components/Button';

import './teacher.sass'

const Teacher = ({ name, photo, id }) => {
    return (
        <div className="teacher-card" >
            <div className="teacher__photo">
                <img src={photo} alt="Teacher"></img>
            </div>
            <div className="teacher__name">{name}</div>
            <div className="teacher__email">АПВТ</div>
            <Button
                additionalClasses={'teacher__button'}
                blueWhite
                type="link"
                text={'Подробнее'}
                href={`teachers/${id}`}
            />
        </div>
    );
};

export default Teacher;