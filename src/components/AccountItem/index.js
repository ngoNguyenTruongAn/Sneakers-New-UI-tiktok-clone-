import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.avatar}
                src="https://is.zobj.net/image-server/v1/images?r=u5DKNn0xU70rXa6sF72Khjl8LgHWYSnGoDEiOv2Gll6fYx_4GXtJpuB2MPICpFX42CsWoV1InEEgPJZH5Uz9RESKuJUMmVoWSc5fbhU9M_xzT-EhrYl4z4xnV1uBWaW58ilT1RU_ybnP39u6PlL6Vua8wdA7qM77E3eGjIJzzbOvmWzu-rQRGCXkvgpLoCXh-sW1yK4RFsU4AvePeZ5BseaqiIiIdJm6vVE-8gVT0BPfHNNG0XumYDjCmFw"
                alt="Nike"
            />
            <div className={styles.info}>
                <h4 className={styles.name}>
                    <span>Nike</span>
                    <FontAwesomeIcon className={styles.checkIcon} icon={faCheckCircle} />
                </h4>
                <span className={styles.description}>Nike Description</span>
            </div>
        </div>
    );
}

export default AccountItem;
