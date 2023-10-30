import { useTranslation } from 'react-i18next';

import styles from './LegalInfo.module.css';

const LegalInfo = () => {
    const { t } = useTranslation();
    return (
        <div className={`${styles.container} container`}>
            <div className={styles.text_box}>
                <h2>{t('legal_notice')}</h2>
                <p>{t('legal_info_intro')}</p>
                <strong>1. {t('legal_info_info')}</strong>
                <p>{t('legal_info_info_text')}</p>
                <strong>2. {t('hosting')}</strong>
                <p>{t('hosting_text')}</p>
                <strong>3. {t('intellectual_property')}</strong>
                <p>{t('intellectual_property_text')}</p>

                <strong>4. {t('links')}</strong>
                <p>{t('links_text')}</p>

                <strong>5. {t('liability_limitation')}</strong>
                <p>{t('liability_limitation_text')}</p>

                <strong>6. {t('access_to_passwords')}</strong>
                <p>{t('access_to_passwords_text')}</p>

                <strong>7. {t('site_usage')}</strong>
                <p>{t('site_usage_text')}</p>

                <strong>8. {t('applicable_law')}</strong>
                <p>{t('applicable_law_text')}</p>

                <strong>{t('in_case_of_disput')}</strong>

                <p>{t('applicable_law_list')}</p>
                <strong>{t('cookies_preferences')}</strong>
                <p>{t('cookies_preferences_text')}</p>

                <strong>{t('cookies_audience')}</strong>
                <p>{t('cookies_audience_text')}</p>

                <strong>{t('cookies_advertisement')}</strong>
                <p>{t('cookies_advertisement_text')}</p>

                <strong>{t('cookies_social_media')}</strong>
                <p>{t('cookies_social_media_text')}</p>

                <strong>{t('cookies_multimedia')}</strong>
                <p>{t('cookies_multimedia_text')}</p>

                <p>{t('applicable_law_list_2')}</p>

                <p>{t('third-party_cookies')}</p>
                <p>{t('third-party_cookies_text')}</p>
                <strong>{t('third-party_cookies_headings')}</strong>
                <p>{t('applicable_law_list_3')}</p>
                <strong>{t('cookies_refusal')}</strong>
                <p>{t('applicable_law_list_4')}</p>
            </div>
        </div>
    );
};

export default LegalInfo;
