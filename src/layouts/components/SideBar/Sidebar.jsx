import React from 'react';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import Menu from '../../../sections/sideBar/Menu';
import { MenuList } from '~/store/sideBarMenu';
import SuggestLogin from '~/sections/sideBar/SuggestLogin';
import SuggestWrapper from '~/sections/sideBar/AccountOffer/SuggestWrapper';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Menu items={MenuList} />
                <SuggestLogin />
                <SuggestWrapper />
            </div>
        </div>
    );
}

export default SideBar;
