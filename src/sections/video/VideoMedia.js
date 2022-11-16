import React, { useEffect, useRef, useState, useContext } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Video.module.scss';
import { MusicIcon, PauseIcon, PlayIcon, VolumeIcon, VolumeMuted } from '~/components/Icons';
import useOnScreen from '~/hooks/useOnScreen';

import { videoContext } from '~/store/VideoContext';

const cx = classNames.bind(styles);

function VideoMedia({ data }) {
    const { isMuted, myVolume, setMuted, toggleMuted } = useContext(videoContext);

    const [isPlaying, setPlayingVideo] = useState(false);
    const [isHover, setHoverVideo] = useState(false);
    const videoRef = useRef(null);
    const VolumeRef = useRef(null);

    const isVisible = useOnScreen(videoRef, '-300px');

    const handleProgress = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setPlayingVideo(false);
        } else {
            videoRef.current.play();
            setPlayingVideo(true);
            videoRef.current.muted = false;
            toggleMuted();
        }
    };

    const handleMutedVideo = () => {
        if (isMuted) {
            videoRef.current.muted = false;
            videoRef.current.volume = myVolume;
            toggleMuted();
            VolumeRef.current.value = myVolume * 100;
        } else {
            videoRef.current.muted = true;
            VolumeRef.current.value = 0;
            toggleMuted();
        }
    };

    const handleChangeVolume = (e) => {
        const value = e.target.value;
        value != 0 ? setMuted(false) : setMuted(true);
        VolumeRef.current.value = value;
        videoRef.current.volume = value / 100;
    };

    useEffect(() => {
        if (videoRef?.current && isVisible) {
            videoRef.current.play();
            setPlayingVideo(true);
            videoRef.current.muted = isMuted;
        } else {
            videoRef.current.pause();
            setPlayingVideo(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <video className={cx('desc')} ref={videoRef} loop autoPlay muted={isMuted} src={data.file_url} />
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
                        <div className={cx('audio')}>
                            <HeadlessTippy
                                interactive
                                trigger="mouseenter"
                                hideOnClick="false"
                                placement="top"
                                offset={[-2, 30]}
                                render={(attrs) => (
                                    <div tabIndex="-1" {...attrs}>
                                        <input
                                            ref={VolumeRef}
                                            type="range"
                                            min="0"
                                            step="2"
                                            max="100"
                                            defaultValue="0"
                                            onChange={handleChangeVolume}
                                            className={cx('volume')}
                                        />
                                    </div>
                                )}
                            >
                                {isMuted ? (
                                    <button onClick={handleMutedVideo} className={cx('sound')}>
                                        <VolumeMuted />
                                    </button>
                                ) : (
                                    <button onClick={handleMutedVideo} className={cx('sound')}>
                                        <VolumeIcon />
                                    </button>
                                )}
                            </HeadlessTippy>
                        </div>
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
