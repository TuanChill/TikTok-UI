import React from 'react';
import styles from './NotFound.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { PlayIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

export default function NotFound() {
    return (
        <div className={cx('container')}>
            <p className={cx('tittle')}>
                <span>4</span>
                <Image
                    src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/site/static/webapp-static-site/bbad6f99219877ac47f9.png"
                    alt="hehe"
                />
                <span>4</span>
            </p>
            <p className={cx('text-desc')}>Couldn't find this page</p>
            <p className={cx('recommend-desc')}>Check out more trending videos on TikTok</p>
            <Button primary large className={cx('btn')} leftIcon={<PlayIcon />} to="/">
                Watch now
            </Button>
        </div>
    );
}
