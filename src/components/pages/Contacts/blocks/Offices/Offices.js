import styles from './Offices.module.css';
import { OFFICES } from '../../../../../constants';

const Offices = () => {
    return (
        <div className={styles.container}>
            {OFFICES.map((office) => {
                return (
                    <div className={styles.offices_item} key={office.name}>
                        <h2 className={styles.offices_item__heading}>{office.name}</h2>
                        <div className={styles.offices_item__address}>{office.address}</div>
                        <a href={`tel:${office.phone}`}>{office.phone}</a>
                        <a href={`mailto:${office.email}`} className={styles.offices_item__email}>
                            {office.email}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Offices;
