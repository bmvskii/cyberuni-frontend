import React from 'react';
import TodoListItem from '../TodoListItem'
import classnames from 'classnames';

import { differenceInMilliseconds } from 'date-fns'

import Emoji from 'react-emoji-render';

import './todoColumn.sass'

const TodoColumn = ({ name, type, todos, onFBClick, onSBClick }) => {
    const columnClass = classnames({
        'todo-column': true,
        'todo-column--expired': type === 'expired',
        'todo-column--completed': type === 'completed',
        'todo-column--active': type === 'active',
    });

    const mappedTodos = todos.map(({ _id, completed, expirationDate, ...props }) => {
        const ListItem = <TodoListItem
            onFBClick={onFBClick}
            onSBClick={onSBClick}
            key={_id}
            id={_id}
            type={type}
            completed={completed}
            expirationDate={expirationDate}
            {...props}
        />

        const isExpired = expirationDate && differenceInMilliseconds(new Date(), new Date(expirationDate)) >= 0
        
        if (!isExpired && !completed && type === 'active') {
            return ListItem;
        } else if (completed && type === 'completed') {
            return ListItem;
        } else if (isExpired && type === 'expired') {
            return ListItem;
        }
        return null;
    })

    const isEmpty = mappedTodos.every(todo => todo === null);

    return (
        <div className={columnClass}>
            <div className="todo-column__name">{name}</div>
            <div className='todo-column__todos'>
                {
                    !isEmpty ?
                        mappedTodos :
                        <div className="no-tasks">
                            <span className="no-tasks__text">Задач нет</span>
                            <Emoji className="no-tasks__emojii" text="📝😥" />
                        </div>
                }
            </div>
        </div>
    );
};

export default TodoColumn;