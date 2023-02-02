import { useTranslation } from "react-i18next";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.background_filter}>
        <div className={styles.content}>
          <div className={styles.heading}>{t("our_goal")}</div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
