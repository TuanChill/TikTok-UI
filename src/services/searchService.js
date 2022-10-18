import { request } from '~/utils/axios';

const getAccounts = async (q, type = 'less') => {
    try {
        const res = await request({
            method: 'GET',
            url: 'users/search',
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getAccounts;
