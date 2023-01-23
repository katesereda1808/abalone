import { useTranslation } from "react-i18next";
const Services = () => {
    const { t, i18n } = useTranslation();
    return (
        <h1>
            {t("services")}
        </h1>
    )
}
export default Services;