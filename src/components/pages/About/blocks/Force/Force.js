import { useTranslation } from "react-i18next";
import styles from "./Force.module.css";
const Force = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.background_filter}>
        <div className={styles.content}>
          <h2 className={styles.heading}>{t("our_force")}</h2>
          <p className={styles.text}>{t("why_team")}</p>
          <p className={styles.source_attribute}>
            Image by{" "}
            <a href="https://www.freepik.com/premium-photo/man-planning-executive-workplace-businesswoman_1083176.htm">
              Freepik
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Force;
