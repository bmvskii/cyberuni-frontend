import React from 'react';
import Teacher from './Teacher';

import './teachers.sass'

const Teachers = ({ teachers }) => {
    return (
        <div className="teachers__wrapper container">
            <h1 className="teachers__heading">Мои преподаватели</h1>
            <div className="teachers">
                {
                    teachers.map(({ _id: id, first_name, last_name, patronimic, ...props }) => {
                        return <Teacher
                            key={id}
                            id={id}
                            name={`${last_name} ${first_name} ${patronimic}`}
                            {...props}
                        />
                    })
                }
            </div>

        </div>
    );
};

export default Teachers;