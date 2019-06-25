import React from 'react';
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Emoji from 'react-emoji-render';

import './todoListItem.sass';

const TodoListItem = ({ name, description, type, id, onFBClick, onSBClick, completed, expirationDate }) => {
    const secondButtonText = type === 'expired' || type === 'completed' ? 'Возобновить' : 'Выполнено';
    const deleteButton = <button
        onClick={onFBClick}
        data-id={id}
        data-completed={completed}
        className="todo-list-item__button todo-list-item__button--delete">
        Удалить
    </button>

    const secondButton = <button
        onClick={onSBClick}
        data-id={id}
        data-completed={completed}
        className="todo-list-item__button todo-list-item__button--completed">
        {secondButtonText}
    </button>;

    const buttons = type === 'completed' ?
        <>{deleteButton}</> :
        <>
            {deleteButton}
            {secondButton}
        </>

    const expDate = expirationDate && format(new Date(expirationDate), 'dd MMMM', { locale: ru })

    return (
        <div className="todo-list-item">
            <div className="todo-list-item__content">
                <div className="todo-list-item__name">Название: {name}</div>
                <Emoji text={`Что сделать❓ ${description}`} className="todo-list-item__description" />
                {expDate && <Emoji text={`Deadline❗: ${expDate}`} className="todo-list-item__expiration-date" />}
            </div>
            <div className="todo-list-item__buttons">
                {buttons}
            </div>
        </div>
    );
};

export default TodoListItem;