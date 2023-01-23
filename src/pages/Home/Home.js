import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
const Home = () => {
    const { t, i18n } = useTranslation();
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>abalone</h1>
          <div className={styles.details}>{t("home_description")}</div>
        </div>
      </div>
    );
}
export default Home;