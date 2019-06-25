import React from 'react';
import Emoji from 'react-emoji-render';

import './subject.sass'

const Subject = ({ name, subjectInfo, teacher }) => {
    const { marks, visited_lectures, visited_laboratories, missed_lectures, missed_laboratories, type } = subjectInfo[0];
    const { first_name, last_name, patronimic, photo } = teacher[0];
    
    let avMark = Math.floor(marks.reduce((total, currVal) => total + currVal) / marks.length);
    avMark = avMark === 0 ? '-' : avMark;

    const subjType = type === 'credit' ? 'Зачет' : 'Екзамен';
    return (
        <div className="subject">
            <h2 className="subject__name">{name}</h2>
            <div className="teacher">
                <h3 className="teacher__heading">Дисциплину ведет </h3>
                <div className="teacher__photo">
                    <img src={photo} alt={`${first_name} ${patronimic} ${last_name}`} />
                </div>
                <p className='teacher__name'>{`${first_name} ${last_name} ${patronimic}`}</p>
            </div>
            <div className="info">
                <p className="info__item info__item--type">
                    <span className="data">Тип :</span>
                    <span className="value">{subjType}</span>
                </p>
                <p className="info__item info__item--visited-lectures">
                    <span className="data">Посещено лекций <Emoji text={'✔'} /></span>
                    <span className="value">{visited_lectures}</span>
                </p>
                <p className="info__item info__item--visited-labs">
                    <span className="data">Посещено лаб. <Emoji text={'✔'} /></span>
                    <span className="value">{visited_laboratories}</span>
                </p>
                <p className="info__item info__item--missed-lectures">
                    <span className="data">Пропущено лекций <Emoji text={'💤'} /></span>
                    <span className="value">{missed_lectures}</span>
                </p>
                <p className="info__item info__item--missed-labs">
                    <span className="data">Пропущено лаб. <Emoji text={'💤'} /></span>
                    <span className="value">{missed_laboratories}</span>
                </p>
                <p className="info__item info__item--average-ball">
                    <span className="data">Средний балл <Emoji text={'💥'} /> </span>
                    <span className="value">
                        {avMark}

                    </span>
                </p>
            </div>
        </div>
    );
}

export default Subject;