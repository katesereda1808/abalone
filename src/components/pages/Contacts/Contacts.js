import { useTranslation } from "react-i18next";
import ContactForm from "./blocks/ContactForm/ContactForm";
import styles from "./Contacts.module.css";
const Contacts = () => {
    const { t, i18n } = useTranslation();
    return (
      // <h1>
      //     {t("contacts")}
      // </h1>
      <div className={`${styles.container} container`}>
        <ContactForm />
      </div>
    );
}
export default Contacts;