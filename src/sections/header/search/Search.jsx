import React, { useEffect, useRef, useState, useTransition } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Clear, Loading, Search } from '~/components/Icons';
import styles from './Search.module.scss';
import useDebounce from '~/hooks/useDebounce';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import search from '~/pages/Search';

const cx = classNames.bind(styles);

export default function SearchBox() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [showResult, setShowResult] = useState(false);
    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
        }
        // const fetchApi = () => {
        //startTransition here
        // }
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
        inputRef.current.focus();
    };
    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && debounceValue}
                placement={'bottom'}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('title-search-results')}>Search Results: </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideSearchResult}
            >
                <div className={cx('search-container')}>
                    <input
                        ref={inputRef}
                        onChange={handleChangeValue}
                        type="text"
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={'false'}
                        onFocus={() => setShowResult(true)}
                    />
                    {!isPending && (
                        <button onClick={handleClearInputValue} className={cx('clear')}>
                            <Clear />
                        </button>
                    )}
                    {isPending && (
                        <div className={cx('loading')}>
                            <Loading />
                        </div>
                    )}
                    <div className={cx('separate')}></div>
                    <button className={cx('search')}>
                        <Search />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
