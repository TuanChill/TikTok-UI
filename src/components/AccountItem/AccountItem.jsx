import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Circle } from '../Icons';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('account-item')}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <p>
                    <span className={cx('full-name')}>{data.full_name}</span>
                    {data.tick && (
                        <span className={cx('tick')}>
                            <Circle />
                        </span>
                    )}
                </p>
                <p className={cx('nick-name')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    // value: PropTypes.string
    data: PropTypes.object,
};

export default AccountItem;
