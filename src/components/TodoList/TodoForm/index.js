import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Button from '../../Button';

import './todoForm.sass'
import 'react-day-picker/lib/style.css';


class TodoForm extends Component {
    state = {
        name: "",
        description: "",
        selectedDay: undefined,
    }

    onChangeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const { name, description, selectedDay : expirationDate } = this.state;
        this.props.onCreateHandler(name, description, expirationDate );
    }

    handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
        this.setState({
            selectedDay,
        });
    }

    render() {
        const { selectedDay } = this.state;
        return (
            <div className="todo-list-form__wrapper">
                <h2 className="todo-list-form__heading">Добавить задачу</h2>
                <form className="todo-list-form">
                    <label className="todo-list-form__label">
                        <span className="text">Название :</span>
                        <input onChange={this.onChangeHandler} name="name" className="todo-list-form__input" type="text" placeholder="Введите название" />
                    </label>
                    <label className="todo-list-form__label">
                        <span className="text">Описание :</span>
                        <textarea onChange={this.onChangeHandler} name="description" className="todo-list-form__textarea" />
                    </label>
                    <label className="todo-list-form__label">
                        <span className="text">Сроки :</span>
                        <DayPickerInput
                            value={selectedDay}
                            onDayChange={this.handleDayChange}
                            dayPickerProps={{
                                selectedDays: selectedDay,
                                disabledDays: {
                                    daysOfWeek: [0, 6],
                                },
                            }}
                        />
                        </label>
                    <Button text={"Добавить задачу"} blueWhite onClickHandler={this.onSubmit} />
                </form>
            </div>
        );
    }
}

export default TodoForm;