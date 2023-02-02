import { useTranslation } from "react-i18next";
import styles from "./OurGoal.module.css";
// import dialogue from "../../../../assets/icons/dialogue.svg";
// import documents from "../../../../assets/icons/documents.svg";
// import graphic from "../../../../assets/icons/graphic.svg";
const OurGoal = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>{t("our_goal")}</div>
        <div className={styles.text}>{t("our_goal_text")}</div>
        {/* <img src={dialogue}/> */}
      </div>
    </div>
  );
};
export default OurGoal;
