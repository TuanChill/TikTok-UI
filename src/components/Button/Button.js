import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    primary = false,
    secondary = false,
    outline = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    classNameLeftIcon,
    classNameRightIcon,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        [classNameLeftIcon]: classNameLeftIcon,
        [classNameRightIcon]: classNameRightIcon,
        primary,
        secondary,
        outline,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon', classNameLeftIcon)}> {leftIcon} </span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon', classNameRightIcon)}> {rightIcon} </span>}
        </Comp>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    classNameLeftIcon: PropTypes.string,
    classNameRightIcon: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
