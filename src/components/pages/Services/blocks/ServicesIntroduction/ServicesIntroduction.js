import { useTranslation } from "react-i18next";
import styles from "./ServicesIntroduction.module.css";
import services_illustration from "../../../../../assets/images/services_intro.png";
import ContactBtn from "../../../../UI/atoms/ContactBtn/ContactBtn";

const ServicesIntroduction = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{t("services")}</h2>
        <p>
          seme text aajkjsjdsndbsjs jsdgnc edjcfhbd dehfhd bdhbc ebfh dbhrb
          dvehbds v gfkn dw dbjsm a sv ehdms s bwhnd xs grbc s dgcb sdvgf
        </p>
        <ContactBtn text={t("contact_btn_text")} color={"#00867F"} />
      </div>
      <div className={styles.image}>
        <picture>
          <img
            src={services_illustration}
            alt="office workers working with laptops"
          />
        </picture>
      </div>
    </div>
  );
};
export default ServicesIntroduction;
