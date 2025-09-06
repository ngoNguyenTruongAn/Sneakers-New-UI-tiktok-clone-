import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faLanguage,
    faCloudArrowUp,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faArrowRightFromBracket,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import ShortTippy from '@tippyjs/react';
import Image from '~/components/Image';
import Search from '../Search';
const Menu_Items = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English', // United States, Canada, Australia, etc.
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt', // Vietnam
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    type: 'language',
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    // handle Logic

    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                // Handle language change
                break;
            default:
        }
    };
    const currentUsers = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@StockX',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/Coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...Menu_Items,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="/img/logo.png" alt="" />
                </div>
                {<Search />}

                <div className={styles.actions}>
                    {currentUsers ? (
                        <>
                            <ShortTippy content="Upload video" placement="bottom">
                                <button className={styles['action-btn']}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </ShortTippy>
                            <ShortTippy content="Share video" placement="bottom">
                                <button className={styles['action-btn']}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </ShortTippy>
                            <ShortTippy content="Message">
                                <button className={styles['action-btn']}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </ShortTippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu item={currentUsers ? userMenu : Menu_Items} onChange={handleMenuChange}>
                        {currentUsers ? (
                            <Image
                                src="https://i.pinimg.com/280x280_RS/6e/77/28/6e772861bcd00887e30f0a7907fc1885.jpg"
                                className={styles['user-avatar']}
                                alt="StockX"
                            />
                        ) : (
                            <button className={styles['more-btn']}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
