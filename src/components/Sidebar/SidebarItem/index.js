import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from 'react-emoji-render';

const SibebarItem = ({ name, href, emojii}) => {
    return (
        <li className="sidebar__list-item">
            <Emoji text={emojii} className="sidebar__emojii" />
            <Link className="sidebar__link" to={href}>{name}</Link>
        </li>
    );
}

export default SibebarItem;