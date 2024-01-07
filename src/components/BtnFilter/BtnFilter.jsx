import styles from './BtnFilter.module.scss';
import { useState } from 'react';

export const BtnFilter = () => {

    const [buttonText, setButtonText] = useState('filter');
    const [showAdditionalMenu, setShowAdditionalMenu] = useState(false);

    const handleButtonClick = () => {
        setButtonText(buttonText==='remove filter'? 'filter' : 'remove filter' );
        setShowAdditionalMenu(!showAdditionalMenu);
    }


    return (
        <>
        <button className={styles.btn} onClick={handleButtonClick}>{buttonText}</button>
        {showAdditionalMenu && (
            <div className={styles.showMenu}>
              <input type="text" placeholder="Search 1" />
              <input type="text" placeholder="Search 2" />
              <input type="text" placeholder="Search 3" />
            </div>
          )}
          </>
    )
}