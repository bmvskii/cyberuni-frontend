import React from 'react';
import Emoji from 'react-emoji-render';
import DateCountdown from 'react-date-countdown-timer';

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const CommonInfo = (props) => {
    const { number, finishDate, sessionStart, sessionEnd, averageMark} = props;

    const sessionStartDate = format(new Date(sessionStart), 'dd MMMM', { locale: ru });
    const sessionEndDate = format(new Date(sessionEnd), 'dd MMMM', { locale: ru });

    return (
        <div className="progress__common-info-wrapper">
            <h2 className="semester__heading">Семестр
        <span className="number">#{`0${number}`}</span>
            </h2>
            <div className="progress__common-info">
                <div className="item session-info">
                    <h2 className="item__heading">Начало сессии</h2>
                    <div className="item__info">
                        <Emoji text="Начало 📅" className="data" />
                        <span className="value">{sessionStartDate}</span>
                    </div>
                    <div className="item__info">
                        <Emoji text="Конец 📆" className="data" />
                        <span className="value">{sessionEndDate}</span>
                    </div>
                </div>
                <div className="item">
                    <Emoji text="Осталось учиться 🕛" className="item__heading" />
                    <div className="item__info">
                        <DateCountdown
                            dateTo={finishDate}
                            numberOfFigures={4}
                            mostSignificantFigure={'day'}
                            locales={['ЛЕТ', 'МЕСЯЦЕВ', 'ДНЕЙ', 'ЧАСОВ', 'МИНУТ', 'СЕКУНД']}
                            locales_plural={['ЛЕТ', 'ММЕСЯЦЕВ', 'ДНЕЙ', 'ЧАСОВ', 'МИНУТ', 'СЕКУНД']}
                        />
                    </div>
                </div>
                <div className="item average-mark">
                    <Emoji text="Средняя оценка 🔥" className="item__heading" />
                    <div className="item__info">
                        <span className="value">{averageMark}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommonInfo;