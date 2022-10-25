import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './AccountOffer.module.scss';
import Image from '~/components/Image';
import { Circle } from '~/components/Icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountOffer({ data }) {
    const fullName = `${data.first_name} ${data.last_name}`;
    return (
        <div>
            <HeadlessTippy
                interactive
                placement="bottom"
                delay={[500, 300]}
                offset={[-10, 4]}
                render={(attrs) => (
                    <div className={cx('tippy-wrapper')} tabIndex="-1" {...attrs}>
                        <div className={cx('header')}>
                            <Image src={data.avatar} alt={data.full_name} className={cx('header-avatar')} />
                            <Button primary small className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                        <div className={cx('info')}>
                            <p className={cx('nick-name')}>{data.nickname}</p>
                            <p className={cx('full-name')}>{fullName}</p>
                            <div className={cx('social-info')}>
                                <p className={cx('followers-count')}>
                                    <span className={cx('count')}>{data.followers_count}</span>
                                    <span className={cx('title')}>Followers</span>
                                </p>
                                <p className={cx('likes-count')}>
                                    <span className={cx('count')}>{data.likes_count}</span>
                                    <span className={cx('title')}>Likes</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            >
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
                    <div className={cx('info')}>
                        <p>
                            <span className={cx('full-name')}>{fullName}</span>
                            {data.tick && (
                                <span className={cx('tick')}>
                                    <Circle />
                                </span>
                            )}
                        </p>
                        <p className={cx('nick-name')}>{data.nickname}</p>
                    </div>
                </Link>
            </HeadlessTippy>
        </div>
    );
}

AccountOffer.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountOffer;
