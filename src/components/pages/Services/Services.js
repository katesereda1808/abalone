import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";
import ServicesIntroduction from "./blocks/ServicesIntroduction/ServicesIntroduction";
import ServicesList from "./blocks/ServicesList/ServicesList";
import ExtraService from "./blocks/ExtraService/ExtraService";
import ContactBlock from "../../UI/templates/ContactBlock/ContactBlock";
import contacts_form_background from "../../../assets/images/services_contact.png";
const Services = () => {
    const { t, i18n } = useTranslation();
    return (
      <div className={"container"}>
        {/* <ServicesIntroduction/> */}
        <ServicesList />
        <ExtraService />
        <ContactBlock backgroundImg={contacts_form_background} />
      </div>
    );
}
export default Services;