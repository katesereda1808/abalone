import { useTranslation } from "react-i18next";
import styles from "./ContactBlock.module.css";
import Form from "../../molecules/Form/Form";
import { OFFICES_EMAILS } from "../../../../constants/index.js"
const ContactBlock = ({ backgroundImg }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={styles.container}
      style={{backgroundImage: `url(${ backgroundImg })`}}
    >
      <div className={`background_filter ${styles.form_container}`}>
        <Form
          btnText={t("contact_btn_text")}
          options={OFFICES_EMAILS}
          selectPlaceholder={t("choose_office")}
        />
      </div>
    </div>
  );
};
export default ContactBlock;
