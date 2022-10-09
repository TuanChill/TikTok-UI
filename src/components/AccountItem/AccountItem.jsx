import React from 'react';
import avatar from '~/assets/images/avatar.jpeg';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
export default function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img src={avatar} alt={'avatar cua mot thang at o nao do'} className={cx('avatar')} />
            <div className={cx('info')}>
                <h5>DatVila</h5>
                <p>Day xa hoi</p>
            </div>
        </div>
    );
}
