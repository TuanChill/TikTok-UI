import React, { useEffect, useState } from 'react';
import styles from './Wrapper.module.scss';
import AccountOffer from './AccountOffer';
import getFollower from '~/services/getFollower';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SuggestWrapper() {
    const [followersSuggest, setFollowersSuggestLess] = useState({
        less: [],
        more: [],
    });
    const [countFollowerSuggest, setCountFollowerSuggest] = useState('less');
    const hanldeChangetypeConutFollowersSuggest = () => {
        switch (countFollowerSuggest) {
            case 'less':
                if (followersSuggest.more.length === 0) {
                    const getFollowerAccount = async () => {
                        const res = await getFollower({ page: '1', per_page: '20' });
                        setFollowersSuggestLess((prev) => {
                            return {
                                ...prev,
                                more: res.data,
                            };
                        });
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
            setFollowersSuggestLess((prev) => {
                return {
                    ...prev,
                    less: res.data,
                };
            });
        };
        getFollowerAccount();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h5 className={cx('title')}>Suggested accounts</h5>
            {followersSuggest[countFollowerSuggest].map((item) => {
                return <AccountOffer key={item.id} data={item} />;
            })}
            <span className={cx('btn-more')} onClick={hanldeChangetypeConutFollowersSuggest}>
                {countFollowerSuggest === 'less' ? 'See all' : 'See less'}
            </span>
        </div>
    );
}

export default SuggestWrapper;
