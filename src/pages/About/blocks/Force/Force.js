import { useTranslation } from "react-i18next";
import styles from "./Force.module.css";
const Force = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>{t("about")}</h1>
      <p>dfghbjnmhgfrv</p>
    </div>
  );
};
export default Force;
