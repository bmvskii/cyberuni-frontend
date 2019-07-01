import React from 'react';
import './teacherDetails.sass';

const TeacherDetails = ({ info }) => {
    console.log(info);
    const {
        first_name,
        last_name,
        photo,
        patronimic,
        email,
    } = info;

    return(
        <div className="teacher--detailswrapper container">
            <h1 className="teacher-details__heading">{`${first_name} ${patronimic} ${last_name}`}</h1>
            <div className="teacher-details__sections-wrapper">
                <h2 className="h2">Основная информация</h2>
                <div className="teacher-details__sections">

                    <div className="teacher-details__section-right">
                        <p className="teacher-details__info-wrapper">Електронная почта:
                        <a className="teacher-details__info" href={`mailto:${email}`}>
                                {email}
                            </a>
                        </p>
                        <p className="teacher-details__info-wrapper">
                            Биография:
                        <div className="teacher-details__info">
                            Bio
                        </div>
                        </p>
                    </div>
                    <div className="teacher-details__section-left">
                        <div className="teacher-details__photo">
                            <img src={photo} alt={`${first_name} ${last_name}`}></img>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default TeacherDetails;