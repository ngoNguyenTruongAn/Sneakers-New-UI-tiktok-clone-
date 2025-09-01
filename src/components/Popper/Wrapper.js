import style from './Popper.module.scss';

function Wrapper({ children, className }) {
    return <div className={`${style.wrapper} ${className}`}>{children}</div>;
}

export default Wrapper;
