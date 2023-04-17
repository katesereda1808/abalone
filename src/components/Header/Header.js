import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";
import {
    Link
} from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/icons/logo.png";
import { useState } from "react";
import MobileMenu from "../UI/molecules/MobileMenu/MobileMenu";
import ChangeLangBtn from "../UI/atoms/ChangeLngBtn/ChangeLangBtn";

const Header = () => {
    const { t, i18n } = useTranslation();
    const handleChangeLng = (lng) => {
        changeLang(lng)
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
    const handleClick = (id) => {
      setActualPage(id);
    }
    const [lang, changeLang] = useState('fr');
    const [isOpen, setIsOpen] = useState(false);
    const [actualPage, setActualPage] = useState('home');
    const navigation = ["home", "about", "services", "contacts"];
    // if (localStorage.getItem("lng")){
    //   changeLang((localStorage.getItem("lng")));
    // }
    // console.log(localStorage.getItem("lng"));
      return (
        <div className={`${styles.header__container} container`}>
          <div className={styles.header}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="abalone logo" />
            </Link>
            <nav className={styles.desktop}>
              <ul className={styles.navigation}>
                {navigation.map((page)=>{
                  return (
                    <li
                      key={page}
                      onClick={() => handleClick(page)}
                      className={actualPage === page? styles.actual: ''}
                    >
                      <Link to={page === 'home'? '/': `/${page}`}>{t(`${page}`)}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button
              className={`${styles.burger} ${styles.mobile}`}
              onClick={() => setIsOpen(true)}
            />
            <div className={styles.desktop}>
              <ChangeLangBtn
                changeLangFunc={handleChangeLng}
                langState={lang}
                languages={LANGUAGES}
              />
            </div>
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