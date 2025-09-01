import style from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    outline = false,
    small = false,
    large = false,
    children,
    primary,
    text = false,
    rounded = false,
    className,
    onClick,
    leftIcon,
    rightIcon,
}) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = [
        style.wrapper,
        primary && style.primary,
        outline && style.outline,
        small && style.small,
        large && style.large,
        text && style.text,
        rounded && style.rounded,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Comp className={classes} {...props}>
           {leftIcon && <span className={style.icon}>{leftIcon}</span>}
            <span className={style.title}>{children}</span>
            {rightIcon && <span className={style.icon}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
