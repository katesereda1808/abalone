import { useTranslation } from "react-i18next";
import styles from "./CompanyStory.module.css";
import author_img from "../../../../../assets/images/Isabelle.jpeg";
import PhotoCircle from "../../../../UI/atoms/PhotoCircle/PhotoCircle";
const CompanyStory = () => {
  const { t, i18n } = useTranslation();
  const imgAlt = "company founder, Isabelle Cecchini"
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <PhotoCircle imgUrl={author_img} imgAlt={imgAlt} />
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
