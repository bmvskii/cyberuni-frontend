import React from 'react';
import classnames from 'classnames';

const Input = ({ labelText, errorText, onChangeHandler, placeholder, type, name, errorStatus}) => {
    const inputClass = classnames({
        'sign-up__input': true,
        'on-error': errorStatus,
    });

    return (
        <label className="sign-up__label">
            <span className='sign-up__text'>{labelText} :</span>
            <input
                className={inputClass}
                onChange={onChangeHandler}
                name={name}
                type={type}
                placeholder={placeholder} />
            <div className="error-field">{errorText}</div>
        </label>
    );
}

export default Input;