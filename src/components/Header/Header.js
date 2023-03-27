
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";
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
import ChangeLangBtn from "../UI/molecules/ChangeLngBtn/ChangeLangBtn";

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
    console.log(localStorage.getItem("lng"));
      return (
        <div className={`${styles.header__container} container`}>
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
            <button
              className={`${styles.burger} ${styles.mobile}`}
              onClick={() => setIsOpen(true)}
            />
            <ChangeLangBtn className={styles.desktop}
              changeLangFunc={handleChangeLng}
              langState={lang}
              languages={LANGUAGES}
            />
          </div>
          {isOpen && (
            <MobileMenu
              setIsOpen={setIsOpen}
              changeLangFunc={handleChangeLng}
              langState={lang}
              languages={LANGUAGES}
            />
          )}
        </div>
      );
}
export default Header;