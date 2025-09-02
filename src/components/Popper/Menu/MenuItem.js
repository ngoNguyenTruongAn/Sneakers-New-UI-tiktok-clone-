import Button from '~/components/Button';

import styles from './Menu.module.scss';

function MenuItems({ data, onClick }) {
    const classes = [styles['menu-item'], data.separate ? styles['separate'] : ''];
    return (
        <Button className={classes.join(' ')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
