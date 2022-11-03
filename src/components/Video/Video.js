import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';

import VideoInfo from '~/sections/video/VideoInfo';
import VideoMedia from '~/sections/video/VideoMedia';

const cx = classNames.bind(styles);

const Video = forwardRef(({ data }, ref) => {
    const videoPost = (
        <div className={cx('wrapper')}>
            <VideoInfo data={data} />
            <VideoMedia data={data} />
        </div>
    );

    const content = ref ? <div ref={ref}>{videoPost}</div> : <div>{videoPost}</div>;

    return content;
});

Video.prototype = {
    data: PropTypes.object.isRequired,
};

export default Video;
