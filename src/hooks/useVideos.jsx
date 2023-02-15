import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import getVideos from '~/services/getVideos';

const useVideos = (pageNum = 1) => {
    const [videos, setVideos] = useState([]);
    const { data, isLoading, isError } = useQuery({
        queryKey: ['videos', pageNum],
        queryFn: () => getVideos('for-you', pageNum).then((res) => res.data),
        keepPreviousData: true,
    });

    useEffect(() => {
        setVideos((prev) => [...prev, ...(data || [])]);
    }, [data]);

    return { videos, isLoading, isError };
};

export default useVideos;
