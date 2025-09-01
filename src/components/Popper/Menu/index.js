import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItems from './MenuItem';

function Menu({ children, item = [] }) {
    const renderItems = () => {
        return item.map((item, index) => <MenuItems key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={styles['menu-list']} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={styles['menu-popper']}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
