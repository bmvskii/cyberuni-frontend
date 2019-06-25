import React from 'react';
import classnames from 'classnames';
import SidebarItem from './SidebarItem';

const Sidebar = ({ isOpened, user }) => {
    const sidebarClassname = classnames({
        'sidebar': true,
        'sidebar--active': isOpened
    });

    const { first_name, last_name, email } = user;
    return (
        <div className={sidebarClassname}>
            <div className="sidebar__user-info user-info">
                <span className="user-info__name">{first_name + ' ' + last_name}</span>
                <span className="user-info__email">{email}</span>
            </div>
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <SidebarItem emojii={'🏠'} name={'Главная'} href={"/"} />
                    <SidebarItem emojii={'👾'} name={'Личный кабинет'} href={"/me/profile"} />
                    <SidebarItem emojii={'💼'} name={'Мои преподаватели'} href={"/me/teachers"} />
                    <SidebarItem emojii={'👪'} name={'Моя группа'} href={"/me/group"} />
                    <SidebarItem emojii={'📊'} name={'Мой прогресс'} href={"/me/progress"} />
                    <SidebarItem emojii={'📁'} name={'Мои задачи'} href={"/me/todos"} />
                    <SidebarItem emojii={'📚'} name={'Мои предметы'} href={"/me/subjects"} />
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;