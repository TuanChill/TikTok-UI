import React from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}></div>
        </div>
    );
}

export default SideBar;
