import { useTranslation } from 'react-i18next';

import styles from './OurGoal.module.css';

const OurGoal = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.heading}>{t('our_goal')}</div>
                <div className={styles.text}>{t('our_goal_text')}</div>
            </div>
        </div>
    );
};

export default OurGoal;
