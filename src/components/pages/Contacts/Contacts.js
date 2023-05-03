import { useTranslation } from "react-i18next";
import Offices from "./blocks/Offices/Offices";
import styles from "./Contacts.module.css";
import ContactBlock from "../../UI/templates/ContactBlock/ContactBlock";
import contacts_form_background from "../../../assets/images/contacts_contact_form.png";

const Contacts = () => {
    const { t, i18n } = useTranslation();
    return (
      <div className={`${styles.container} container`}>
        <ContactBlock backgroundImg={contacts_form_background} />
        <Offices />
      </div>
    );
}
export default Contacts;