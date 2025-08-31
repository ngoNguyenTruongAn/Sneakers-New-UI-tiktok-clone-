import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="/img/logo.png" alt="" />
                </div>
                <div className={styles.search}>
                    <input placeholder="Search account and video" spellCheck={false} />
                    <button className={styles['clear']}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={styles['loading']} icon={faSpinner} />
                    <button className={styles['search-btn']}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={styles.actions}>
                </div>
            </div>
        </header>
    );
}

export default Header;
