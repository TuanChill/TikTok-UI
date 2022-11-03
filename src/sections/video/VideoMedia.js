import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { MusicIcon, PauseIcon, PlayIcon, VolumeIcon, VolumeMuted } from '~/components/Icons';
import useOnScreen from '~/hooks/useOnScreen';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function VideoMedia({ data }) {
    const [isPlaying, setPlayingVideo] = useState(false);
    const [isMuted, setMutedVideo] = useState(true);
    const [isHover, setHoverVideo] = useState(false);
    const videoRef = useRef(null);
    const isVisible = useOnScreen(videoRef, '-180px');

    const handleProgress = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setPlayingVideo(false);
        } else {
            videoRef.current.play();
            setPlayingVideo(true);
            videoRef.current.muted = false;
            setMutedVideo(false);
        }
    };

    const handleMutedVideo = () => {
        if (isMuted) {
            videoRef.current.muted = false;
            setMutedVideo(false);
        } else {
            videoRef.current.muted = true;
            setMutedVideo(true);
        }
    };

    useEffect(() => {
        if (videoRef.current && isVisible) {
            videoRef.current.play();
            setPlayingVideo(true);
            // videoRef.current.muted = false;
            // setMutedVideo(false);
        } else {
            videoRef.current.pause();
            setPlayingVideo(false);
        }
    }, [isVisible]);

    return (
        <div className={cx('video')}>
            <p className={cx('music')}>
                <MusicIcon />
                <span className={cx('music-name')}>{`music-${data.music}`}</span>
            </p>
            <div
                onMouseEnter={() => setHoverVideo(true)}
                onMouseLeave={() => setHoverVideo(false)}
                className={cx('content')}
            >
                <video className={cx('desc')} ref={videoRef} loop autoPlay muted src={data.file_url} />
                {isHover && (
                    <div className={cx('controls')}>
                        {isPlaying ? (
                            <button onClick={handleProgress} className={cx('btn-control')}>
                                <PauseIcon />
                            </button>
                        ) : (
                            <button onClick={handleProgress} className={cx('btn-control')}>
                                <PlayIcon />
                            </button>
                        )}
                        {isMuted ? (
                            <button onClick={handleMutedVideo} className={cx('volume')}>
                                <VolumeMuted />
                            </button>
                        ) : (
                            <button onClick={handleMutedVideo} className={cx('volume')}>
                                <VolumeIcon />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

VideoMedia.prototype = {
    data: PropTypes.object.isRequired,
};

export default VideoMedia;
