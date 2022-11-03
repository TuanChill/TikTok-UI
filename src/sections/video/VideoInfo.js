import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';
import Button from '~/components/Button';
import { Circle } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function VideoInfo({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image src={data.user.avatar} alt={data.user.nickname} className={cx('avatar')} />
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('main')}>
                        <div className={cx('user')}>
                            <span className={cx('nick-name')}>{data.user.nickname}</span>
                            <span className={cx('tick')}>
                                <Circle />
                            </span>
                            <span className={cx('full-name')}>{`${data.user.first_name} ${data.user.last_name}`}</span>
                        </div>
                        <div className={cx('content')}>
                            <span className={cx('desc')}>{data.description}</span>
                        </div>
                    </div>
                    <Button secondary small className={cx('btn-follow')}>
                        Follow
                    </Button>
                </div>
            </div>
        </div>
    );
}

VideoInfo.prototype = {
    data: PropTypes.object.isRequired,
};

export default VideoInfo;
