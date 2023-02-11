import { useTranslation } from "react-i18next";
import styles from "./CompanyStory.module.css";
const CompanyStory = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <div className={styles.author_photo}></div>
        <h2>Isabelle CECCHINI</h2>
        <p>{t("director")}</p>
      </div>
      <div className={styles.text}>
        <p>{t("company_story")}</p>
      </div>
    </div>
  );
};
export default CompanyStory;
