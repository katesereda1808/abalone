import { useTranslation } from "react-i18next";
import styles from "./MobileMenu.module.css";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import PhotoCircle from "../../atoms/PhotoCircle/PhotoCircle";

const MobileMenu = ({ setIsOpen }) => {
    const { t, i18n } = useTranslation();
    const handleChangeLng = (lng) => {
      changeLang(lng);
      i18n.changeLanguage(lng);
      localStorage.setItem("lng", lng);
    };
    const [lang, changeLang] = useState("fr");
  return (
    <div className={`${styles.container} container`}>
      <button className={styles.close_btn} onClick={() => setIsOpen(false)} />
      <nav className={styles.navigation_container}>
        <ul className={styles.navigation}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              {t("services")}
            </Link>
          </li>
          {/* <li>
                  <Link to="/partners">{t("partners")}</Link>
                </li> */}
          <li>
            <Link to="/contacts" onClick={() => setIsOpen(false)}>
              {t("contacts")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MobileMenu;
