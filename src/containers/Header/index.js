import React from 'react';

import classnames from 'classnames';

import Logo from '../../components/Logo';
import Button from '../../components/Button'
import Sidebar from '../../components/Sidebar';
import MenuButton from '../../components/HamburgerButton';

const Header = (props) => {
    const {
        isSidebarOpen,
        isLoggedIn,
        onLogoutHandler,
        onMenuToggle,
        user
    } = props;

    const headerWrapperClass = classnames({
        'header__wrapper': true,
        'header__wrapper--sidebar-opened': isSidebarOpen,
        'header__wrapper--authorized': isLoggedIn,
    });

    const headerClass = classnames({
        'header container': true,
    })

    const buttons = !isLoggedIn ?
        <>
            <Button text={"Вход"} type='link' href='/login'/>
            <Button text={"Регистрация"} type='link' href='/signup' />
        </> :
        <Button isAuthorized={isLoggedIn} text={"Выход"} onClickHandler={onLogoutHandler} />;

    return (
        <div className={headerWrapperClass}>
            { isLoggedIn && <Sidebar isOpened={isSidebarOpen} user={user} /> }
            <header className={headerClass}>
                <MenuButton isAuthorized={isLoggedIn} onClickHandler={onMenuToggle} />
                <Logo isAuthorized={isLoggedIn} />
                <div className="buttons">
                    {buttons}
                </div>
            </header>
        </div>
    );
}

export default Header;