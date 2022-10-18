import React, { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { Clear, Loading, Search } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import useDebounce from '~/hooks/useDebounce';
import getAccounts from '~/services/searchService';

const cx = classNames.bind(styles);

export default function SearchBox() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [isLoading, setLoading] = useState();
    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetch = async () => {
            setLoading(true);
            const accounts = await getAccounts(debounceValue);
            setSearchResult(accounts.data);
            setLoading(false);
        };
        fetch();
    }, [debounceValue]);

    const handleChangeValue = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleHideSearchResult = () => {
        setShowResult(false);
    };

    const handleClearInputValue = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                placement={'bottom'}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('title-search-results')}>Search Results: </h4>
                            {searchResult.map((acc) => {
                                return <AccountItem key={acc.id} data={acc} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideSearchResult}
            >
                <div className={cx('search-container')}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={'false'}
                        onChange={handleChangeValue}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !isLoading && (
                        <button onClick={handleClearInputValue} className={cx('clear')}>
                            <Clear />
                        </button>
                    )}
                    {!!searchValue && isLoading && (
                        <div className={cx('loading')}>
                            <Loading />
                        </div>
                    )}
                    <div className={cx('separate')}></div>
                    <button
                        className={cx('search')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                            inputRef.current.blur();
                        }}
                    >
                        <Search />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
