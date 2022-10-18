import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import routesConfig from '~/configs/routes';

import styles from './Header.module.scss';
import { Logo, Menu, PlusIcon } from '~/components/Icons';
import SearchBox from '~/layouts/components/Search';
import Button from '~/components/Button';
import MenuSection from '~/sections/header/MoreActions';
import Image from '~/components/Image';
import { MENU_ITEMS, UserMenu } from '~/store/menu';

const cx = classNames.bind(styles);

function Header() {
    const handleChangeMenu = (menuItem) => {
        console.log(menuItem);
    };
    const HaveUser = false;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <Logo />
                </Link>
                <SearchBox />
                <div className={cx('actions')}>
                    <Button to={routesConfig.upload} outline leftIcon={<PlusIcon />}>
                        Upload
                    </Button>
                    {!HaveUser && (
                        <Button primary to={'/'}>
                            Login
                        </Button>
                    )}
                    <MenuSection items={HaveUser ? UserMenu : MENU_ITEMS} onChange={handleChangeMenu}>
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
