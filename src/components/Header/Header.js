
import { useTranslation } from "react-i18next";
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/icons/abalone_logo.svg";
import { useState } from "react";
// import logoipeg from "../../assets/icons/abalone_logo_2.jpeg";

const Header = () => {
    const { t, i18n } = useTranslation();
    const handleChangeLng = (lng) => {
        changeLang(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    const [lang, changeLang] = useState('fr');
    return (
      <div className={styles.header__container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="abalone logo" />
          </div>
          <nav>
            <ul className={styles.navigation}>
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("about")}</Link>
              </li>
              <li>
                <Link to="/services">{t("services")}</Link>
              </li>
              <li>
                <Link to="/partners">{t("partners")}</Link>
              </li>
              <li>
                <Link to="/contacts">{t("contacts")}</Link>
              </li>
            </ul>
          </nav>
          <details className={styles.lang}>
            <summary className={styles.lang__chosen}>{lang}</summary>
            <div className={styles.lang__options}>
              <button onClick={() => handleChangeLng("eng")}>eng</button>
              <button onClick={() => handleChangeLng("fr")}>fr</button>
            </div>
          </details>

          {/* <div>
            <button onClick={() => handleChangeLng("en")}>Eng</button>
            <button onClick={() => handleChangeLng("fr")}>Fr</button>
          </div> */}
        </div>
      </div>
    );
}
export default Header;