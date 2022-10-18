import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
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

Image.propTypes = {
    classNames: PropTypes.string,
    src: PropTypes.string.isRequired,
    fallback: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
