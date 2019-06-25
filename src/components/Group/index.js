import React from 'react';

import Student from './Student';
import HeadPerson from './HeadPerson';

import './group.sass';

const Group = ({ group: { data } }) => {
    const { headman, curator, students } = data;
    const { name } = data._doc;

    const hm = headman[0];
    const cr = curator[0];

    let bestStudent = null;
    let highestAverageMark = 0;

    students.forEach(student => {
        let averageMark = 0;
        let totalMarksAmount = 0;

        student.learning_subjects.map(subj => {
            const sum = subj.marks.reduce((total, currVal) => total + currVal);

            if (sum > 0 && subj.marks.length > 0) {
                averageMark += sum;
                totalMarksAmount += subj.marks.length;
            }
        })

        if (averageMark > highestAverageMark) {
            highestAverageMark = averageMark / totalMarksAmount;
            bestStudent = student;
        }
    })

    const bs = bestStudent && <HeadPerson
        href={`/students/${bestStudent._id}`}
        title={"Лучший студент"}
        first_name={bestStudent.first_name}
        last_name={bestStudent.last_name}
        email={bestStudent.email}
        emojii={'👑'}
        average={highestAverageMark}
        type={"best"}
    />

    const headmanEl = hm &&
        <HeadPerson
            href={`/students/${hm._id}`}
            title={"Староста"}
            first_name={hm.first_name}
            last_name={hm.last_name}
            email={hm.email}
            emojii={'⭐'}
            photo={hm.photo}
        />;

    const curatorEl = cr &&
        <HeadPerson
            href={`/teachers/${cr._id}`}
            title={"Куратор"}
            first_name={cr.first_name}
            last_name={cr.last_name}
            email={cr.email}
            photo={cr.photo}
            emojii={'🎩'}
        />

    return (
        <div className="group container">
            <h1 className="group__title">Моя группа</h1>
            <div className="group__info">
                <div className="group__common-info">
                    <h2 className="group__common-info-title">
                        Название:
                        <span className="title">{name}</span>
                    </h2>
                    <div className="group__head-persons">
                        {headmanEl}
                        {curatorEl}
                        {bs}
                    </div>
                </div>
                <div className="group__students-wrapper">
                    <h2 className="group__students-heading">Студенты</h2>
                    <div className="group__students">
                        {
                            students.map(({ _id, ...props }) => <Student key={_id} _id={_id} {...props} />)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Group;