import React from 'react';
import { Link } from 'react-router-dom';
import Clock from '../Clock'
import Emoji from 'react-emoji-render';

import './dashboard.sass'

const Dashboard = ({ user }) => {
    const { first_name, last_name } = user;
    return (
        <div className="dashboard container">
            <h1 className="dashboard__heading">Главная страница</h1>
            <div className="dashboard__info-panel">

                <div className="dashboard__welcome">
                    <h2 className="dashboard__heading">
                        <span>
                            Добро пожаловать
                        <Emoji text={`✋`} className="emojii" />
                        </span>
                        <span className="dashboard__username">{`${first_name} ${last_name}`}</span>
                    </h2>
                    <p className="dashboard__descr">
                        <span className="blue">CyberUni</span> значительно облегчит вам жить в ваших делах.
                        Отслеживай дни рожденья одногруппников, планируй задачи, следи за статистикой успеваемости и многое другое.
                        Следуй по ссылкам ниже  <Emoji text={`💘`} className="emojii" />
                    </p>
                </div>

                <div className="dashboard__time">
                    <Clock size={200} timeFormat="24hour" hourFormat="standard" />
                </div>
            </div>
            <div className="dashboard__links">
                <Link className='dashboard__link dashboard__link--profile' to='/me/profile'>Личный кабинет</Link>
                <Link className='dashboard__link dashboard__link--group' to='/me/group'>Моя группа</Link>
                <Link className='dashboard__link dashboard__link--progress' to='/me/progress'>Мой прогресс</Link>
                <Link className='dashboard__link dashboard__link--tasks' to='/me/todos'>Мои задачи</Link>
                <Link className='dashboard__link dashboard__link--teachers' to='/me/teachers'>Мои преподаватели</Link>
                <Link className='dashboard__link dashboard__link--subjects' to='/me/subjects'>Мои предметы</Link>
            </div>
        </div>
    );
}

export default Dashboard;