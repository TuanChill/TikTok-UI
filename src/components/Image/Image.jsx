import React, { forwardRef, useState } from 'react';
import NoImage from '~/assets/images/NoImage.jpg';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ className, src, alt, fallback: userFallback, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(userFallback || NoImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
