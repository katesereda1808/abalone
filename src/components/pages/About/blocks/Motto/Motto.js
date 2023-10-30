import { useTranslation } from 'react-i18next';

import styles from './Motto.module.css';

const Motto = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.our_motto}>
                <p>{t('our_motto')}</p>
            </div>
            <div className={styles.our_motto_1}>
                <p>{t('motto_1')}</p>
            </div>
            <div className={styles.our_motto_2}>
                <p>{t('motto_2')}</p>
            </div>
        </div>
    );
};

export default Motto;
