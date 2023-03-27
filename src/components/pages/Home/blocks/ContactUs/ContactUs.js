import { useTranslation } from "react-i18next";
import styles from "./ContactUs.module.css";
import ContactBtn from "../../../../UI/atoms/ContactBtn/ContactBtn";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={`background_filter`}>
        <div className={styles.content}>
          <div className={styles.contacts}>
            <div className={styles.contacts__title}>{t("choose_office")}</div>
            <div className={styles.offices__contacts}>
              <div className={styles.office}>
                <div className={styles.office__name}>Boulouparis</div>
                <div className={styles.office__phone}>+687 23 06 06</div>
              </div>
              <div className={styles.office}>
                <div className={styles.office__name}>La Foa</div>
                <div className={styles.office__phone}>+687 73 73 89</div>
              </div>
              <div className={styles.office}>
                <div className={styles.office__name}>Ducos</div>
                <div className={styles.office__phone}>+687 23 06 00</div>
              </div>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.circle__content}>
              <h2 className={styles.circle__title}>{t("call_to_action")}</h2>
              <Link to="/contacts">
                <ContactBtn
                  text={t("contact_btn_text")}
                  btnColor="white"
                  textColor="#00867F"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
