import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.css";
import Form from "../../../../UI/molecules/Form/Form";
const ContactForm = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={`background_filter ${styles.form_container}`}>
        <Form text={t("contact_btn_text")} color={"#00867F"} />
      </div>
    </div>
  );
};
export default ContactForm;
