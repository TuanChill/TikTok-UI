import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { CloseIcon } from '~/components/Icons';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

let modalRoot = document.getElementById('modal-root');

if (!modalRoot) {
    const modalRootDiv = document.createElement('div');
    modalRootDiv.id = 'modal-root';
    document.body.appendChild(modalRootDiv);
    modalRoot = modalRootDiv;
}

export default function Modal({ visible, setVisible, children, className }) {
    return createPortal(
        <>
            {visible && (
                <div className={cx('modal')}>
                    <div onClick={() => setVisible(false)} className={cx('overlay')}></div>
                    <div className={cx('modal-container')}>
                        <div onClick={() => setVisible(false)} className={cx('btn-close')}>
                            <CloseIcon />
                        </div>
                        <div className={cx('modal-content', className)}>{children}</div>
                    </div>
                </div>
            )}
        </>,
        modalRoot,
    );
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
};
