import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';

const cx = classNames.bind(styles);

const Menu = ({ items }) => {
    return (
        <div className={cx('wrapper')}>
            {items.map((item, index) => (
                <MenuItem key={index} to={item.to} title={item.title} icon={item.icon} />
            ))}
        </div>
    );
};

Menu.prototype = {
    items: PropTypes.node.isRequired,
};

export default Menu;
