import { useTranslation } from 'react-i18next';

import styles from './ExtraService.module.css';

const ExtraService = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <div className={styles.text_box}>
                <p className={styles.text}>{t('training_and_coaching_services')}</p>
            </div>
        </div>
    );
};

export default ExtraService;
