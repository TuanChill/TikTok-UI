import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon }) {
    const location = useLocation();

    return (
        <NavLink exact="true" to={to} className={() => cx('menu-item', { actived: location.pathname === to })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.prototype = {
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
};

export default MenuItem;
