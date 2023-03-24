
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
import MobileMenu from "../UI/molecules/MobileMenu/MobileMenu";
// import logoipeg from "../../assets/icons/abalone_logo_2.jpeg";

const Header = () => {
    const { t, i18n } = useTranslation();
    const handleChangeLng = (lng) => {
        changeLang(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    const [lang, changeLang] = useState('fr');
    const [isOpen, setIsOpen] = useState(false);
    // if (localStorage.getItem("lng")){
    //   changeLang((localStorage.getItem("lng")));
    // }
      return (
        <div className={styles.header__container}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={logo} alt="abalone logo" />
            </div>
            <nav className={styles.desktop}>
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
                {/* <li>
                  <Link to="/partners">{t("partners")}</Link>
                </li> */}
                <li>
                  <Link to="/contacts">{t("contacts")}</Link>
                </li>
              </ul>
            </nav>
            <button className={`${styles.burger} ${styles.mobile}`} onClick={() => setIsOpen(true)}/>
            <details className={`${styles.lang} ${styles.desktop}`}>
              <summary className={styles.lang__chosen}>{lang}</summary>
              <div className={styles.lang__options}>
                <button onClick={() => handleChangeLng("en")}>en</button>
                <button onClick={() => handleChangeLng("fr")}>fr</button>
              </div>
            </details>

            {/* <div>
            <button onClick={() => handleChangeLng("en")}>Eng</button>
            <button onClick={() => handleChangeLng("fr")}>Fr</button>
          </div> */}
          </div>
          {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        </div>
      );
}
export default Header;