import { useTranslation } from 'react-i18next';

import dialogue from '../../../../../assets/icons/dialogue.svg';
import documents from '../../../../../assets/icons/documents.svg';
import graphic from '../../../../../assets/icons/graphic.svg';

import styles from './WhyUs.module.css';

const WhyUs = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.why_us__items}>
                    <div className={styles.why_us__item}>
                        <div className={styles.why_us__icon}>
                            <img src={documents} alt="document icon" />
                        </div>
                        <div className={styles.why_us__text_heading}>{t('why_us_1_heading')}</div>
                        <div className={styles.why_us__text}>{t('why_us_1_text')}</div>
                    </div>
                    <div className={styles.why_us__item}>
                        <div className={styles.why_us__icon}>
                            <img src={dialogue} alt="dialogue icon" />
                        </div>
                        <div className={styles.why_us__text_heading}>{t('why_us_2_heading')}</div>
                        <div className={styles.why_us__text}>{t('why_us_2_text')}</div>
                    </div>
                    <div className={styles.why_us__item}>
                        <div className={styles.why_us__icon}>
                            <img src={graphic} alt="graphic icon" />
                        </div>
                        <div className={styles.why_us__text_heading}>{t('why_us_3_heading')}</div>
                        <div className={styles.why_us__text}>{t('why_us_3_text')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
