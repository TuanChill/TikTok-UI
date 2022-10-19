import React from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import Menu from '../../../sections/sideBar/Menu';
import { MenuList } from '~/store/sideBarMenu';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Menu items={MenuList} />
            </div>
        </div>
    );
}

export default SideBar;
