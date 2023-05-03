import styles from "./Services.module.css";
import ServicesList from "./blocks/ServicesList/ServicesList";
import ExtraService from "./blocks/ExtraService/ExtraService";
import ContactBlock from "../../UI/templates/ContactBlock/ContactBlock";
import contacts_form_background from "../../../assets/images/services_contact.png";
const Services = () => {
    return (
      <div className={"container"}>
        <ServicesList />
        <ExtraService />
        <ContactBlock backgroundImg={contacts_form_background} />
      </div>
    );
}
export default Services;