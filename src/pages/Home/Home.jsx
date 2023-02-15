import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

import Video from '~/components/Video';
import { ErrIcon, LoadingHourglass } from '~/components/Icons';

import useVideos from '~/hooks/useVideos';
import VideoProvider from '~/store/VideoContext';

const cx = classNames.bind(styles);

function Home() {
    const [pageNum, setPageNum] = useState(1);

    const { videos: videoList, isLoading, isError } = useVideos(pageNum);

    useEffect(() => {
        const handleScroll = async (e) => {
            if (
                window.innerHeight + e.target.documentElement.scrollTop + e.target.documentElement.scrollHeight * 0.4 >=
                e.target.documentElement.scrollHeight
            ) {
                await setPageNum((prev) => {
                    console.log(prev);
                    return prev + 1;
                });
                await window.removeEventListener('scroll', handleScroll);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [videoList]);

    return (
        <VideoProvider>
            <div className={cx('wrapper')}>
                {!isLoading && (
                    <Fragment>
                        {videoList?.map((video) => {
                            return <Video key={video.uuid} data={video} />;
                        })}
                    </Fragment>
                )}
                {isError && (
                    <p className={cx('err-mess')}>
                        <span className={cx('icon-err')}>
                            <ErrIcon />
                        </span>
                    </p>
                )}
                {isLoading && pageNum !== 1 && (
                    <div className={cx('loading-mess')}>
                        <span className={cx('icon-loading')}>
                            <LoadingHourglass />
                        </span>
                        <span>Loading more ...</span>
                    </div>
                )}
            </div>
        </VideoProvider>
    );
}

export default Home;
