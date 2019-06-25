import React from 'react';
import TodoListColumn from './TodoColumn';
import TodoForm from './TodoForm';

import './todoList.sass'

const TodoList = ({ todos, onCreateHandler, onDeleteHandler, onCompleteHandler, onRecoveryHandler}) => {
     return (
          <div className="container">
               <div className="todo">
                    <h1 className="h1">Мои задачи</h1>
                    <div className="todo-columns">
                         <TodoListColumn onFBClick={onDeleteHandler} onSBClick={onCompleteHandler} type={"active"} name={"Нужно сделать"} todos={todos} />
                         <TodoListColumn onFBClick={onDeleteHandler} onSBClick={onCompleteHandler} type={"completed"} name={"Выполнены"} todos={todos} />
                         <TodoListColumn onFBClick={onDeleteHandler} onSBClick={onRecoveryHandler} type={"expired"} name={"Просрочены"} todos={todos} />
                    </div>
                    <TodoForm onCreateHandler={onCreateHandler} />
               </div>
          </div>
     );
};

export default TodoList;