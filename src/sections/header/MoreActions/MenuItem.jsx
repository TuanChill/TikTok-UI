import PropTypes from 'prop-types';
import React from 'react';
import Button from '~/components/Button';
import styles from './MenuSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            className={cx('menu-item', { separate: data.separate })}
            to={data.to}
            leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MenuItem;
