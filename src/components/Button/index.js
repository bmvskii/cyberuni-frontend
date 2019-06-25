import React from 'react';
import classnames from 'classnames'
import { Link } from 'react-router-dom';

const Button = ({ text, whiteBlue, blueWhite, onClickHandler, isAuthorized, type, href }) => {
    const cn = classnames({
        'button': true,
        'button__blue-white': whiteBlue,
        'button__white-blue': blueWhite,
        'button__default': !whiteBlue && !blueWhite && !isAuthorized,
        'button__white': isAuthorized,
    });
    const element = type === 'link' ?
        <Link to={href} className={cn}>{text}</Link> :
        <button className={cn} onClick={onClickHandler}>{text}</button>;
    return element;
};

Button.defaultProps = {
    text: 'Button',
    whiteBlue: false,
    blueWhite: false,
    onClickHandler: () => { }
}

export default Button;