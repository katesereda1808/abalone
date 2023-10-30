import { useTranslation } from 'react-i18next';

import author_img from '../../../../../assets/images/Isabelle.jpg';
import PhotoCircle from '../../../../UI/atoms/PhotoCircle/PhotoCircle';

import styles from './CompanyStory.module.css';

const CompanyStory = () => {
    const { t } = useTranslation();
    const imgAlt = 'company founder, Isabelle Cecchini';

    return (
        <div className={styles.container}>
            <div className={styles.author}>
                <div className={styles.photo_container}>
                    <PhotoCircle imgUrl={author_img} imgAlt={imgAlt} />
                </div>
                <h2>Isabelle CECCHINI</h2>
                <p>{t('chartered_accountant_and_statutory_auditor')}</p>
            </div>
            <div className={styles.text}>
                <p>{t('isabelle_description')}</p>
            </div>
        </div>
    );
};
export default CompanyStory;
