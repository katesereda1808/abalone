import { useTranslation } from "react-i18next";
import ContactForm from "./blocks/ContactForm/ContactForm";
import Offices from "./blocks/Offices/Offices";
import styles from "./Contacts.module.css";
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
        <ContactForm />
        <Offices />
      </div>
    );
}
export default Contacts;