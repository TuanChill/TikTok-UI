import classNames from 'classnames/bind';
import React from 'react';

import Button from '~/components/Button';
import styles from './SuggestLogin.module.scss';

const cx = classNames.bind(styles);

export default function SuggestLogin() {
    const haveUser = false;
    return !haveUser ? (
        <div className={cx('wrapper')}>
            <p className={cx('suggest-text')}>Log in to follow creators, like videos, and view comments.</p>
            <Button secondary large className={cx('login-btn')}>
                Login
            </Button>
        </div>
    ) : null;
}
