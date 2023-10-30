import { useTranslation } from 'react-i18next';

const Partners = () => {
    const { t } = useTranslation();
    return <h1>{t('partners')}</h1>;
};

export default Partners;
