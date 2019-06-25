import React from 'react';
import Subject from './Subject';
import './subjectsWrapper.sass'

const Subjects = (props) => {
    const { subjects, teachers, userInfo: { learning_subjects } } = props;
    return (
        <div className="container">
            <h1>Мои предметы</h1>
            <div className="subjects-wrapper">
                {
                    subjects.map(({ _id, teacher, ...props }) => {
                        const tch = teachers.filter(tchr => tchr._id === teacher); 
                        const moreSubjectInfo = learning_subjects.filter(subj => subj.subject === _id);

                        return <Subject
                            key={_id}
                            teacher={tch}
                            subjectInfo={moreSubjectInfo}
                            {...props} />
                    })
                }
            </div>
        </div>
    );

}

export default Subjects;