import { useTranslation } from "react-i18next";
import styles from "./ServicesList.module.css";
import { SERVICES_LIST } from "../../../../../constants";
const ServicesList = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      {/* <h1>{t("about")}</h1> */}

      {SERVICES_LIST.map((service) => {
        return (
          <div className={styles.list_item} key={service.heading}>
            <h2 className={styles.list_item__heading}>
              {t(`${service.heading}`)}
            </h2>
            <div className={styles.list_item__text}>
              <ul>
                {service.content.map((serviceItem)=>{
                  return <li key={serviceItem}>{t(`${serviceItem}`)}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}

    </div>
  );
};
export default ServicesList;
