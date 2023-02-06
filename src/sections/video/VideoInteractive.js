import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import { ChatIcon, HeartIcon, ShareIcon } from '~/components/Icons';
import Modal from '~/components/Modal/Modal';

const cx = classNames.bind(styles);

function VideoInteractive({ data }) {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className={cx('video-interactive')}>
                <div onClick={() => setVisible(true)} className={cx('icon-interac')}>
                    <HeartIcon />
                </div>
                <div onClick={() => setVisible(true)} className={cx('icon-interac')}>
                    <ChatIcon />
                </div>
                <div className={cx('icon-interac')}>
                    <ShareIcon />
                </div>
            </div>
            <Modal visible={visible} setVisible={setVisible} className={cx('modal-auth')}>
                <h4 className={cx('title')}>Login to TikTok</h4>
                <div className={cx('form-login')}></div>
            </Modal>
        </>
    );
}

VideoInteractive.propTypes = {
    // data: PropTypes.object.isRequired,
};

export default VideoInteractive;
