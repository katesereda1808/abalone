import { useTranslation } from "react-i18next";
import styles from "./Introduction.module.css";
import logo_text from "../../../../../assets/icons/logo_white.png";
const Introduction = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <h1 className={styles.title}>abalone</h1> */}
        <img className={styles.logo_text} src={logo_text} alt="abalone" />
        <div className={styles.details}>{t("home_description")}</div>
      </div>
    </div>
  );
};
export default Introduction;
