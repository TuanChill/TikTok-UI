import { request } from '~/utils/axios';

const getFollower = async (per_page) => {
    try {
        const res = await request({
            method: 'GET',
            url: '/users/suggested',
            params: {
                page: '1',
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getFollower;
