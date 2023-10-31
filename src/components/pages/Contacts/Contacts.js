import Offices from './blocks/Offices/Offices';
import ContactBlock from '../../UI/templates/ContactBlock/ContactBlock';
import contacts_form_background from '../../../assets/images/contacts_contact_form.png';

import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={`${styles.container} container`}>
            <ContactBlock backgroundImg={contacts_form_background} />
            <Offices />
        </div>
    );
};

export default Contacts;
