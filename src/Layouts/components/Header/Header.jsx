import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Coin, Keyboard, Language, Logo, Logout, Menu, PlusIcon, Profile, Question, Setting } from '~/components/Icons';
import SearchBox from '~/sections/header/search';
import Button from '~/components/Button';
import MenuSection from '~/sections/header/MoreActions';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <Language />,
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    { title: 'Feedback and help', icon: <Question />, to: '/feedback' },
    { title: 'Keyboard shortcuts', icon: <Keyboard /> },
];

const UserMenu = [
    { title: 'View profile', icon: <Profile />, to: '/profile' },
    {
        title: 'Get coins',
        icon: <Coin />,
        to: '/coin',
    },
    {
        title: 'Setting',
        icon: <Setting />,
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <Logout />,
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const handleChangeMenu = (menuItem) => {
        console.log(menuItem);
    };
    const HaveUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Logo />
                <SearchBox />
                <div className={cx('actions')}>
                    <Button outline leftIcon={<PlusIcon />}>
                        Upload
                    </Button>
                    {!HaveUser && <Button primary>Login</Button>}
                    <MenuSection items={UserMenu} onChange={handleChangeMenu}>
                        {HaveUser ? (
                            <>
                                <Image
                                    className={cx('user-avatar')}
                                    src={
                                        '/https://yt3.ggpht.com/Kj0VJBdZj5Ib7yCMcUjcSQR93PrZBHqiDDvw5gH07xcCBTj9pBRePU5kxvRlutMPNk89gXfP=s88-c-k-c0x00ffffff-no-rj-mo'
                                    }
                                    alt={'Luong Ngoc Tuan'}
                                />
                            </>
                        ) : (
                            <Menu />
                        )}
                    </MenuSection>
                </div>
            </div>
        </header>
    );
}

export default Header;
