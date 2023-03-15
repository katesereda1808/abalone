import { useTranslation } from "react-i18next";
const Partners = () => {
    const { t, i18n } = useTranslation();
    return (
        <h1>
            {t("partners")}
        </h1>
    )
}
export default Partners;