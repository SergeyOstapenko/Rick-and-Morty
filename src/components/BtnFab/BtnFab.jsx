
import styles from './BtnFab.module.scss';
import iconMoreVertical from '/more-vertical.svg';

export const BtnFab = () => {
    return(
        <button type='button' className={styles.btnfab}>
            <img src={iconMoreVertical} alt="iconMoreVertical" />
        </button>
    )
}