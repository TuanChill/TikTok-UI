const { request } = require('~/utils/axios');

const getVideos = async (type = 'for-you', page = 1) => {
    try {
        const res = await request({
            method: 'GET',
            url: 'videos',
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getVideos;
