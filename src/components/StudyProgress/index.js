import React from 'react';

import './progress.sass';
import Statistics from './Statistics';
import ProgressCurve from './ProgressCurve';
import CommonInfo from './CommonInfo';

const StudyProgress = ({ userInfo }) => {
    const {
        semester,
        learning_subjects
    } = userInfo;

    const { disciplines, finish_date, number, session_start, session_end } = semester[0];

    let totalLectures = 0,
        totalLabs = 0,
        visitedLectures = 0,
        visitedLabs = 0,
        missedLectures = 0,
        missedLabs = 0;

    disciplines.map(disc => totalLectures += disc.lectures);
    disciplines.map(disc => totalLabs += disc.laboratories);

    learning_subjects.map(subj => visitedLectures += subj.visited_lectures);
    learning_subjects.map(subj => visitedLabs += subj.visited_laboratories);
    learning_subjects.map(subj => missedLectures += subj.missed_lectures);
    learning_subjects.map(subj => missedLabs += subj.missed_laboratories);

    let averageMark = 0;
    let totalMarksAmount = 0;

    //Calculate an average mark from all subjects that student has
    learning_subjects.map(subj => {
        const sum = subj.marks.reduce((total, currVal) => total + currVal);

        if (sum > 0 && subj.marks.length > 0) {
            averageMark += sum;
            totalMarksAmount += subj.marks.length;
        }
    });

    return (
        <div className="progress container">
            <h1 className="progress__heading h1">Мой прогресс</h1>
            <CommonInfo
                number={number}
                finishDate={finish_date}
                sessionStart={session_start}
                sessionEnd={session_end}
                averageMark={Math.round(averageMark / totalMarksAmount)}
            />
            <Statistics
                totalLabs={totalLabs}
                totalLectures={totalLectures}
                missedLabs={missedLabs}
                missedLectures={missedLectures}
                visitedLabs={visitedLabs}
                visitedLectures={visitedLectures}
            />
            <ProgressCurve />
        </div>

    );
}

export default StudyProgress;