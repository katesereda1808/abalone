import { useTranslation } from 'react-i18next';

import logo_text from '../../../../../assets/icons/logo_white.png';

import styles from './Introduction.module.css';

const Introduction = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.logo_text} src={logo_text} alt="abalone" />
                <div className={styles.details}>{t('home_description')}</div>
                <p className={styles.source_attribute}>
                    Image by{' '}
                    <a href="https://www.freepik.com/free-photo/side-view-cropped-unrecognizable-business-people-working-common-desk_5839469.htm">
                        Freepik
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Introduction;
