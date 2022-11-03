import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Video from '~/components/Video';
import { ErrIcon, LoadingHourglass } from '~/components/Icons';

import useVideos from '~/hooks/useVideos';

const cx = classNames.bind(styles);

function Home() {
    const [pageNum, setPageNum] = useState(1);

    const { videoList, isLoading, isError, error, hasNextPage } = useVideos(pageNum);

    const intObserver = useRef();

    const lastEleRef = useCallback(
        (video) => {
            if (isLoading) return;

            if (intObserver.current) intObserver.current.disconnect();
            intObserver.current = new IntersectionObserver((videos) => {
                if (videos[0].isIntersecting && hasNextPage) {
                    setPageNum((prev) => prev + 1);
                }
            });

            if (video) {
                intObserver.current.observe(video);
            }
        },
        [isLoading, hasNextPage],
    );

    return (
        <div className={cx('wrapper')}>
            {videoList.map((video, index) => {
                if (index === videoList.length - 5) {
                    return <Video ref={lastEleRef} key={video.uuid} data={video} />;
                } else {
                    return <Video key={video.uuid} data={video} />;
                }
            })}
            {isError && (
                <p className={cx('err-mess')}>
                    <span className={cx('icon-err')}>
                        <ErrIcon />
                    </span>
                    <span>Error: {error.message}</span>
                </p>
            )}
            {isLoading && (
                <div className={cx('loading-mess')}>
                    <span className={cx('icon-loading')}>
                        <LoadingHourglass />
                    </span>
                    <span>Loading more ...</span>
                </div>
            )}
        </div>
    );
}

export default Home;
