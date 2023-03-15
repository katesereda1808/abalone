import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";
import ServicesIntroduction from "./blocks/ServicesIntroduction/ServicesIntroduction";
import ServicesList from "./blocks/ServicesList/ServicesList";
const Services = () => {
    const { t, i18n } = useTranslation();
    return (
      <div className={'container'}>
        <ServicesIntroduction/>
        {/* <h2>{t("services_heading")}</h2>
        <details>
          <summary>{t("account_establishment")}</summary>
          <div className={styles.collapse_content}>
            <ul>
              <li>{t("accounting_maintenance")}</li>
              <li>{t("implementation_of_adapted_accounting_plans")}</li>
              <li>{t("control_of_accounting_services")}</li>
              <li>
                {t(
                  "setting_up_and_monitoring_operational_analytical_accountingsetting_up_and_monitoring_operational_analytical_accounting"
                )}
              </li>
              <li>{t("preparation_of_periodic_financial_statements")}</li>
              <li>{t("preparation_of_forecasting_statements")}</li>
              <li>{t("preparation_of_group_accounts")}</li>
              <li>{t("preparation_of_financing_tables")}</li>
              <li>{t("assistance_to_works_councils")}</li>
              <li>{t("all_types_of_accounting_assistance")}</li>
            </ul>
          </div>
        </details> */}
      </div>
    );
}
export default Services;