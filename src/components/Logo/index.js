import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames'

const Logo = ({ white, isAuthorized }) => {
    const logoClassname = classnames({
        logo: true,
        'logo__white': white,
        'logo--hidden': isAuthorized
    })
    return (
        <div className={logoClassname}>
            <Link to='/home'>CyberUni</Link>
        </div>
    )
}

export default Logo;