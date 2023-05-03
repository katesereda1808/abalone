import { useTranslation } from "react-i18next";
import styles from "./Team.module.css";
import { useState } from "react";
import PhotoCircle from "../../../../UI/atoms/PhotoCircle/PhotoCircle";
import MemberCard from "../../../../UI/molecules/MemberCard/MemberCard";
import {
  COWORKERS_LAFOA,
  COWORKERS_DUCOS,
  PARTNERS_INFO,
} from "../../../../../constants";

const Team = () => {
  const { t } = useTranslation();
  const [shown, setShown] = useState(false);
  const ShowDescription = () => {
    setShown(!shown)
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.page_title}>{t("team_members")}</h2>
      <h3 className={styles.page_subtitle}>{t("cross_functional_roles")}</h3>
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
              ShowDescription={ShowDescription}
            />
          );
        })}
      </div>
      <h3 className={styles.page_subtitle}>La Foa</h3>
      <div className={styles.team_members}>
        {COWORKERS_LAFOA.map((coworker) => {
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
      <h3 className={styles.page_subtitle}>Ducos</h3>
      <div className={styles.team_members}>
        {COWORKERS_DUCOS.map((coworker) => {
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
    </div>
  );
};
export default Team;
