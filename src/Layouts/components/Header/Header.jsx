import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Logo } from '~/components/Icons';
import SearchBox from '~/sections/search';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Logo />
                <SearchBox />
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
