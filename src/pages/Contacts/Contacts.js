import { useTranslation } from "react-i18next";
const Contacts = () => {
    const { t, i18n } = useTranslation();
    return (
        <h1>
            {t("contacts")}
        </h1>
    )
}
export default Contacts;