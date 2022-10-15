import React from 'react';
import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}
