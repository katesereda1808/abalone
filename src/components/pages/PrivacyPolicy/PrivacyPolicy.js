import { useTranslation } from 'react-i18next';

import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className={`${styles.container} container`}>
            <div className={styles.text_box}>
                <h2>{t('data_protection')}</h2>
                <h3>{t('data_intro')}</h3>
                <p>{t('data_intro_text')}</p>
                <h3>{t('data_principles')}</h3>
                <p>{t('data_principles_text')}</p>
                <h3>{t('data_usage')}</h3>
                <p>{t('data_usage_text')}</p>
                <h3>{t('data_collection')}</h3>
                <p>{t('data_collection_text')}</p>
                <h3>{t('data_relevance')}</h3>
                <p>{t('data_relevance_text')}</p>
                <h3>{t('data_default')}</h3>
                <p>{t('data_default_text')}</p>
                <h3>{t('data_processing')}</h3>
                <strong>{t('data_legal_basis')}</strong>
                <p>{t('data_processing_operations')}</p>
                <strong>{t('processing_operations_purposes')}</strong>
                <p>{t('processing_operations_purposes_list')}</p>
                <h3>{t('processing_operations_purposes_regulations')}</h3>
                <p>{t('processing_operations_purposes_regulations_list')}</p>
                <h3>{t('processing_operations_purposes_interests')}</h3>
                <p>{t('processing_operations_purposes_interests_list')}</p>
                <h3>{t('processing_operations_purposes_consent')}</h3>
                <p>{t('processing_operations_purposes_consent_list')}</p>
                <h3>{t('data_we_process')}</h3>
                <p>{t('data_we_process_list')}</p>
                <h3>{t('persons_concerned')}</h3>
                <p>{t('persons_concerned_list')}</p>
                <h3>{t('data_recipients')}</h3>
                <p>{t('data_recipients_text')}</p>
                <h3>{t('data_retention_periods')}</h3>
                <p>{t('data_retention_periods_text')}</p>
                <strong>{t('purposes')}</strong>
                <strong>{t('retention_duration')}</strong>
                <p>{t('prospects_management')}</p>
                <strong>{t('clients_data')}</strong>
                <strong>{t('current_archive')}</strong>
                <p>{t('current_archive_text_1')}</p>
                <strong>{t('intermediate_archive')}</strong>
                <p>{t('intermediate_archive_1_text')}</p>
                <strong>{t('prospects_data')}</strong>
                <strong>{t('current_archive')}</strong>
                <p>{t('current_archive_text_2')}</p>
                <strong>{t('intermediate_archive')}</strong>
                <p>{t('intermediate_archive_2_text')}</p>
                <p>{t('new_clients_management')}</p>
                <strong>{t('sanctions')}</strong>
                <strong>{t('current_archive')}</strong>
                <p>{t('n/a')}</p>
                <strong>{t('intermediate_archive')}</strong>
                <p>{t('2_months_sanction')}</p>
                <strong>{t('legal_proceedings_documents')}</strong>
                <strong>{t('current_archive')}</strong>
                <p>{t('dispute_duration')}</p>
                <strong>{t('intermediate_archive')}</strong>
                <p>{t('legal_requirements_duration')}</p>
                <p>{t('suppliers_management')}</p>
                <strong>{t('current_archive')}</strong>
                <p>{t('current_archive_text_1')}</p>
                <strong>{t('intermediate_archive')}</strong>
                <p>{t('intermediate_archive_1_text')}</p>
                <p>{t('mail_management')}</p>
                <strong>{t('sanctions')}</strong>
                <strong>{t('current_archive')}</strong>
                <p>{t('n/a')}</p>
                <strong>{t('intermediate_archive')}</strong>
                <p>{t('2_months_sanction')}</p>
                <strong>{t('legal_proceedings_documents')}</strong>
                <strong>{t('current_archive')}</strong>
                <p>{t('dispute_duration')}</p>
                <strong>{t('intermediate_archive')}</strong>
                <p>{t('legal_requirements_duration')}</p>
                <h3>{t('data_security')}</h3>
                <p>{t('data_security_text')}</p>
                <h3>{t('transfer_outside_EU')}</h3>
                <p>{t('transfer_outside_EU_text')}</p>
                <h3>{t('rights_and_their_exercise')}</h3>
                <h3>{t('content_of_rights')}</h3>
                <p>{t('content_of_rights_text')}</p>
                <h3>{t('right_to_object')}</h3>
                <p>{t('right_to_object_text')}</p>
                <h3>{t('rights_excercise')}</h3>
                <p>{t('rights_excercise_text')}</p>
                <h3>{t('withdrawal_of_consent')}</h3>
                <p>{t('withdrawal_of_consent_text')}</p>
                <h3>{t('data_complaint')}</h3>
                <p>{t('data_complaint_text')}</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
