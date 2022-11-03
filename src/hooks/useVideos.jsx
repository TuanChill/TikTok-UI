import { useEffect, useState } from 'react';
import getVideos from '~/services/getVideos';

const useVideos = (pageNum = 1) => {
    const [videoList, setVideoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        setError({});
        const controller = new AbortController();
        const { signal } = controller;
        getVideos('for-you', pageNum, signal)
            .then((res) => {
                if (pageNum === 1) {
                    setVideoList([...res.data]);
                } else {
                    setVideoList((prev) => [...prev, ...res.data]);
                }
                setHasNextPage(Boolean(res.data.length));
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                if (signal.aborted) return;
                setIsError(true);
                setError({ message: err.message });
            });
        return () => controller.abort();
    }, [pageNum]);

    return { videoList, isLoading, isError, error, hasNextPage };
};

export default useVideos;
