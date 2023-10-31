import { useTranslation } from 'react-i18next';

import { SERVICES_LIST } from '../../../../../constants';

import styles from './ServicesList.module.css';

const ServicesList = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            {SERVICES_LIST.map((service) => {
                return (
                    <div className={styles.list_item} key={service.heading}>
                        <h2 className={styles.list_item__heading}>{t(`${service.heading}`)}</h2>
                        <div className={styles.list_item__text}>
                            <ul>
                                {service.content.map((serviceItem) => {
                                    return <li key={serviceItem}>{t(`${serviceItem}`)}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ServicesList;
