import React from 'react';
import Button from '~/components/Button';
import styles from './MenuSection.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function MenuItem({ data, onClick }) {
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
