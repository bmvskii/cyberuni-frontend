import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import Emoji from 'react-emoji-render';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';

const Statistics = ({
    totalLectures,
    visitedLectures,
    visitedLabs,
    totalLabs,
    missedLabs,
    missedLectures
}) => {
    return (
        <div className="progress__statistics">
            <div className="item ">
                <Emoji text="Лекции 📜" className="item__heading" />
                <div className="item__info">
                    <span className="data">Всего:</span>
                    <span className="value">{totalLectures}</span>
                </div>
                <div className="item__info">
                    <span className="data">Посещено:</span>
                    <div className="value">

                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const percentage = isVisible ? Math.round((visitedLectures / totalLectures) * 100) : 0;
                                return (
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={{
                                            path: {
                                                stroke: '#000',
                                                strokeLinecap: 'round',
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            trail: {
                                                stroke: '#fff',
                                            },
                                            text: {
                                                fill: '#46d671',
                                                fontSize: '30px',
                                            },
                                        }}
                                    />
                                );
                            }}
                        </VisibilitySensor>
                    </div>
                </div>
                <div className="item__info">
                    <span className="data">Пропущено:</span>
                    <div className="value">
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const percentage = isVisible ? Math.round((missedLectures / totalLectures) * 100) : 0;
                                return (
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={{
                                            path: {
                                                stroke: '#000',
                                                strokeLinecap: 'round',
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            trail: {
                                                stroke: '#fff',
                                            },
                                            text: {
                                                fill: '#ff3d3d',
                                                fontSize: '30px',
                                            },
                                        }}
                                    />
                                );
                            }}
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
            <div className="item ">
                <Emoji text="Лабораторные 📝" className="item__heading" />

                <div className="item__info">
                    <span className="data">Всего:</span>
                    <span className="value">{totalLabs}</span>
                </div>
                <div className="item__info">
                    <span className="data">Сдано:</span>
                    <div className="value">

                        <VisibilitySensor>
                            {({ isVisible }) => {

                                const percentage = isVisible ? Math.round(((visitedLabs * 100) / totalLabs))  : 0;

                                return (
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={{
                                            path: {
                                                stroke: '#000',
                                                strokeLinecap: 'round',
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            trail: {
                                                stroke: '#fff',
                                            },
                                            text: {
                                                fill: '#46d671',
                                                fontSize: '30px',
                                            },
                                        }}
                                    />
                                );
                            }}
                        </VisibilitySensor>
                    </div>
                </div>
                <div className="item__info">
                    <span className="data">Пропущено:</span>
                    <div className="value">
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const percentage = isVisible ? Math.round((missedLabs / totalLabs) * 100) : 0;
                                return (
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={{
                                            path: {
                                                stroke: '#000',
                                                strokeLinecap: 'round',
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            trail: {
                                                stroke: '#fff',
                                            },
                                            text: {
                                                fill: '#ff3d3d',
                                                fontSize: '30px',
                                            },
                                        }}
                                    />
                                );
                            }}
                        </VisibilitySensor>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;