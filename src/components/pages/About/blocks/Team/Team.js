import { useTranslation } from "react-i18next";
import styles from "./Team.module.css";
import PhotoCircle from "../../../../UI/atoms/PhotoCircle/PhotoCircle";
import MemberCard from "../../../../UI/molecules/MemberCard/MemberCard";
import { COWORKERS_INFO, PARTNERS_INFO } from "../../../../../constants";

const Team = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 className={styles.page_title}>{t("team_members")}</h2>
      <div className={styles.team_members}>
        {COWORKERS_INFO.map((coworker) => {
          return (
            <MemberCard
              key={coworker.name}
              imgUrl={coworker.imgUrl}
              imgAlt={`${coworker.name}`}
              name={coworker.name}
              title={t(`${coworker.title}`)}
              description={t(`${coworker.description}`)}
              office={coworker.office}
            />
          );
        })}
      </div>
      <h2 className={styles.page_title}>{t("partners")}</h2>
      <div className={styles.team_members}>
        {PARTNERS_INFO.map((coworker) => {
          return (
            <MemberCard
              key={coworker.name}
              imgUrl={coworker.imgUrl}
              imgAlt={`${coworker.name}`}
              name={coworker.name}
              title={t(`${coworker.title}`)}
              description={t(`${coworker.description}`)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Team;
