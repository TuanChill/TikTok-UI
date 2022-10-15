import React, { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './MenuSection.module.scss';
import MenuItem from '~/sections/header/MoreActions/MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
export default function MenuSection({ children, items, onChange }) {
    const [menuList, setMenuList] = useState([{ data: items }]);
    const currentMenuItem = menuList[menuList.length - 1];

    // show current menu item is last item of menuList
    const renderItems = () => {
        return currentMenuItem.data.map((item, index) => {
            const isParent = !!item.children;
            return <MenuItem data={item} key={index} onClick={() => handleClickMenuItem(isParent, item)} />;
        });
    };

    // handle Change Menu
    const handleClickMenuItem = (isParent, item) => {
        if (isParent) {
            // push current menu into MenuList to render
            setMenuList((prev) => [...prev, item.children]);
        } else {
            onChange(item);
        }
    };

    const handleBackMenu = () => {
        setMenuList((prev) => prev.slice(0, prev.length - 1));
    };

    const handleChangeToFirstMenu = () => {
        setMenuList((prev) => prev.slice(0, 1));
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                onHide={handleChangeToFirstMenu}
                delay={[0, 800]}
                offset={[14, 10]}
                placement={'bottom-end'}
                render={(attrs) => (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {menuList.length > 1 && <Header title={'Language'} onBack={handleBackMenu} />}
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('more-btn')}>{children}</div>
            </HeadlessTippy>
        </div>
    );
}
