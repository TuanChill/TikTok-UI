import classNames from 'classnames/bind';
import React, { useState } from 'react';

import Image from '~/components/Image';
import { LogoWhite, QrIcon } from '~/components/Icons';
import { FooterList } from '~/store/footer';
import Modal from '~/components/Modal';

import styles from './Footer.module.scss';

import MsApp from '~/assets/images/DownLinks/ms.png';
import AppleApp from '~/assets/images/DownLinks/apple-down.png';
import AmazonApp from '~/assets/images/DownLinks/amazon-down.png';
import GGPlayApp from '~/assets/images/DownLinks/chplay-down.png';
import QrApp from '~/assets/images/qr-code-app.png';

const cx = classNames.bind(styles);

function Footer() {
    const [visible, setVisible] = useState(false);
    return (
        <div className={cx('container')}>
            <div className={cx('div-down-app')}>
                <h5 className={cx('title')}>Download now</h5>
                <div className={cx('imgs-link')}>
                    <div onClick={() => setVisible(true)} className={cx('qr-code')}>
                        <QrIcon />
                        <span className={cx('text')}>QR CODE</span>
                    </div>
                    <a href="https://www.microsoft.com/store/apps/9NH2GPH4JZS4">
                        <Image src={MsApp} alt="ms download" className={cx('img-app-down')} />
                    </a>
                    <a href="https://www.tiktok.com/download-link/af/id1235601864">
                        <Image src={AppleApp} alt="apple store" className={cx('img-app-down')} />
                    </a>
                    <a href="https://www.amazon.com/dp/B07KR1RJL2/">
                        <Image src={AmazonApp} alt="amazon down app" className={cx('img-app-down')} />
                    </a>
                    <a href="https://www.tiktok.com/download-link/af/com.ss.android.ugc.trill">
                        <Image src={GGPlayApp} alt="google play down app" className={cx('img-app-down')} />
                    </a>
                </div>
            </div>
            <footer className={cx('footer')}>
                <LogoWhite />
                {FooterList.map((e) => {
                    return (
                        <div className={cx('list')}>
                            <h5 className={cx('list-title')}>{e.title}</h5>
                            {e.children.map((item) => {
                                return <p className={cx('item')}>{item.title}</p>;
                            })}
                        </div>
                    );
                })}
            </footer>
            <div className={cx('cpr')}>
                <span>© 2023 TikTok</span>
            </div>
            <Modal visible={visible} setVisible={setVisible} className={cx('qr-box')}>
                <h4 className={cx('title')}>Point your camera at the QR code to download TikTok</h4>
                <Image src={QrApp} alt="Qr code to download app" className={cx('qr-img')} />
            </Modal>
        </div>
    );
}

export default Footer;
