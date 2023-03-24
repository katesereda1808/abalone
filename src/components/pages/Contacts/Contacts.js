import { useTranslation } from "react-i18next";
import Offices from "./blocks/Offices/Offices";
import styles from "./Contacts.module.css";
import ContactBlock from "../../UI/templates/ContactBlock/ContactBlock";
import contacts_form_background from "../../../assets/images/contacts_contact_form.png";

const Contacts = () => {
    const { t, i18n } = useTranslation();
    // const options = [
    //   { value: "boulouparis@abalone.nc", label: "Boulouparis" },
    //   { value: "ducos@abalone.nc", label: "Ducos" },
    //   { value: "lafoa@abalone.nc", label: "La Foa" },
    //   { value: "paita@abalone.nc", label: "Paita" },
    //   { value: "katesereda22@gmail.com", label: "test mail" },
    // ];
    return (
      // <h1>
      //     {t("contacts")}
      // </h1>
      <div className={`${styles.container} container`}>
        {/* <ContactForm /> */}
        <ContactBlock backgroundImg={contacts_form_background} />
        <Offices />
      </div>
    );
}
export default Contacts;