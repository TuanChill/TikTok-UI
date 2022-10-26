import React from 'react';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import Menu from '../../../sections/sideBar/Menu';
import { MenuList } from '~/store/sideBarMenu';
import SuggestLogin from '~/sections/sideBar/SuggestLogin';
import SuggestWrapper from '~/sections/sideBar/AccountOffer/SuggestWrapper';
import { Wrapper as Footer } from '~/components/Popper';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')} tabIndex="0">
            <Menu items={MenuList} />
            <SuggestLogin />
            <SuggestWrapper />
            <Footer className={cx('footer')}>
                <span>TuanChill© 2022</span>
            </Footer>
        </div>
    );
}

export default SideBar;
