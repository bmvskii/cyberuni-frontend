import React from 'react';
import classnames from 'classnames';

const Advantage = ({ number, heading, descr, white}) => {
    const reversedNumber = 4 - number;
    const advClass = classnames({
        'advantage': true,
        'advantage--white': white,
    });

    return (
        <div className={advClass}>
            <div className="advantage__number" data-number={`0${reversedNumber}`}>{`0${number}`}</div>
            <h3 className="advantage__heading">{heading}</h3>
            <p className="advantage__descr">{descr}</p>
        </div>
    );
}

export default Advantage;