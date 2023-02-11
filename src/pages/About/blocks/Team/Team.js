import { useTranslation } from "react-i18next";
import styles from "./Team.module.css";
const Team = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t("about")}</h1>
      <p>dfghbjnmhgfrv</p>
    </div>
  );
};
export default Team;
