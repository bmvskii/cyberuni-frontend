import React from 'react';
import Emoji from 'react-emoji-render';

import TelegramIcon from '../../assets/images/telegram.jpg'
import InstaIcon from '../../assets/images/insta.png'
import PhoneIcon from '../../assets/images/phone.svg'

import './studentDetails.sass';

const StudentDetails = ({ info }) => {
    const {
        first_name,
        last_name,
        photo,
        email,
        learning_subjects,
        instagram,
        telegram,
        phone
    } = info;

    let averageMark = 0;
    let totalMarksAmount = 0;

    //Calculate an average mark of a student
    learning_subjects.map(subj => {
        const sum = subj.marks.reduce((total, currVal) => total + currVal);

        if (sum > 0 && subj.marks.length > 0) {
            averageMark += sum;
            totalMarksAmount += subj.marks.length;
        }
    })

    const userPhoto = photo ?
        <img src={photo} alt={`${first_name} ${last_name}`} className="student__photo-inner" /> :
        <Emoji text={'👤'} className="student-details__photo-emojii" />;

    const avgMark = totalMarksAmount && Math.round(averageMark / totalMarksAmount);
    const avgData = avgMark ? avgMark : "-";

    return (
        <div className="student-details__wrapper container">
            <h1 className="student-details__heading">{`${first_name} ${last_name}`}</h1>
            <div className="student-details__sections-wrapper">
                <h2 className="h2">Основная информация</h2>
                <div className="student-details__sections">

                    <div className="student-details__section-right">
                        <p className="student-details__info-wrapper">Електронная почта:
                        <a className="student-details__info" href={`mailto:${email}`}>
                                {email}
                            </a>
                        </p>
                        <p className="student-details__info-wrapper">
                            День рождения :
                        <div className="student-details__info">
                                5 марта 1998 года
                        </div>
                        </p>

                        <p className="student-details__info-wrapper">
                            <div className="wrapper">
                                <img alt="telegram" className="icon" src={TelegramIcon} />
                                Telegram :
                            </div>
                            <span className="student-details__info">
                                {telegram}
                            </span>
                        </p>
                        <p className="student-details__info-wrapper">
                            <div className="wrapper">
                                <img alt="insta" className="icon" src={InstaIcon} />
                                Instagram :
                            </div>
                            <span className="student-details__info">
                                {instagram}
                            </span>
                        </p>
                        <p className="student-details__info-wrapper">
                            <div className="wrapper">
                                <img alt="phone" className="icon" src={PhoneIcon} />
                                Мобильный телефон :
                            </div>
                            <span className="student-details__info">
                                {phone}
                            </span>
                        </p>

                        <p className="student-details__info-wrapper average-ball">
                            Средний балл :
                            <span className="student-details__info">
                                {avgData}
                            </span>
                        </p>
                    </div>
                    <div className="student-details__section-left">
                        <div className="student-details__photo">
                            {userPhoto}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails;