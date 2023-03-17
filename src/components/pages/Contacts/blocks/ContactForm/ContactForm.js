import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.css";
import Form from "../../../../UI/molecules/Form/Form";
import { OFFICES_EMAILS } from "../../../../../constants";
const ContactForm = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={`background_filter ${styles.form_container}`}>
        <Form
          btnText={t("contact_btn_text")}
          btnColor={"#00867F"}
          options={OFFICES_EMAILS}
          selectPlaceholder={t("choose_office")}
        />
      </div>
    </div>
  );
};
export default ContactForm;
