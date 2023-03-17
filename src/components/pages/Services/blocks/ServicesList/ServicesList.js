import { useTranslation } from "react-i18next";
import styles from "./ServicesList.module.css";
const ServicesList = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      {/* <h1>{t("about")}</h1> */}
      <div className={styles.list_item}>
        <h2 className={styles.list_item__heading}>
          {t("account_establishment")}
        </h2>
        <div className={styles.list_item__text}>
          <ul>
            <li>{t("accounting_maintenance")}</li>
            <li>{t("implementation_of_adapted_accounting_plans")}</li>
            <li>{t("control_of_accounting_services")}</li>
            <li>
              {t("setting_up_and_monitoring_operational_analytical_accounting")}
            </li>
            <li>{t("preparation_of_periodic_financial_statements")}</li>
            <li>{t("preparation_of_forecasting_statements")}</li>
            <li>{t("preparation_of_group_accounts")}</li>
            <li>{t("preparation_of_financing_tables")}</li>
            <li>{t("assistance_to_works_councils")}</li>
            <li>{t("all_types_of_accounting_assistance")}</li>
          </ul>
        </div>
      </div>
      <div className={styles.list_item}>
        <h2 className={styles.list_item__heading}>
          {t("audit_certification")}
        </h2>
        <div className={styles.list_item__text}>
          <ul>
            <li>{t("contractual_audit_of_accounts")}</li>
            <li>{t("audit_of_internal_control_procedures")}</li>
            <li>{t("audit_before_taking_an_investment")}</li>
            <li>{t("statutory_audit_of_accounts")}</li>
          </ul>
        </div>
      </div>
      <div className={styles.list_item}>
        <h2 className={styles.list_item__heading}>{t("evaluation")}</h2>
        <div className={styles.list_item__text}>
          <ul>
            <li>{t("evaluation_of_companies")}</li>
          </ul>
        </div>
      </div>
      <div className={styles.list_item}>
        <h2 className={styles.list_item__heading}>{t("expertise")}</h2>
        <div className={styles.list_item__text}>
          <ul>
            <li>{t("amicable_expertise")}</li>
            <li>{t("arbitration")}</li>
            <li>{t("commitment_to_contributions")}</li>
            <li>{t("commitment_to_mergers")}</li>
          </ul>
        </div>
      </div>
      <div className={styles.list_item}>
        <h2 className={styles.list_item__heading}>{t("consolidations")}</h2>
      </div>
      <div className={styles.list_item}>
        <h2 className={styles.list_item__heading}>{t("mergers")}</h2>
      </div>
    </div>
  );
};
export default ServicesList;
