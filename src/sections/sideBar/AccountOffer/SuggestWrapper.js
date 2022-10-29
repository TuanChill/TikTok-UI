import React, { useEffect, useState } from 'react';
import styles from './Wrapper.module.scss';
import AccountOffer from './AccountOffer';
import getFollower from '~/services/getFollower';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SuggestWrapper() {
    const [followersSuggest, setFollowersSuggestLess] = useState([]);
    const [countFollowerSuggest, setCountFollowerSuggest] = useState('less');
    const [moreUsers, setMoreUsers] = useState([]);

    const handleChangeTypeCountUser = () => {
        switch (countFollowerSuggest) {
            case 'less':
                if (followersSuggest.length === 5) {
                    const getFollowerAccount = async () => {
                        const res = await getFollower({ page: '1', per_page: '20' });
                        setMoreUsers(res.data.slice(5));
                    };
                    getFollowerAccount();
                }
                setCountFollowerSuggest('more');
                break;
            case 'more':
                setCountFollowerSuggest('less');
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        const getFollowerAccount = async () => {
            const res = await getFollower('5');
            setFollowersSuggestLess(res.data);
        };
        getFollowerAccount();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h5 className={cx('title')}>Suggested accounts</h5>
            {followersSuggest.map((item) => {
                return <AccountOffer key={item.id} data={item} />;
            })}
            {countFollowerSuggest === 'more' &&
                moreUsers.map((item) => {
                    return <AccountOffer key={item.id} data={item} />;
                })}
            <span className={cx('btn-more')} onClick={handleChangeTypeCountUser}>
                {countFollowerSuggest === 'less' ? 'See all' : 'See less'}
            </span>
        </div>
    );
}

export default SuggestWrapper;
