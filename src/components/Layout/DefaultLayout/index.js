import Header from '~/components/Layout/components/Header';
import Slidebar from './Slidebar';
import style from './DefaultLayout.module.scss';
function DefaultLayout({ children }) {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.container}>
                <Slidebar />
                <div className={style.content}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
