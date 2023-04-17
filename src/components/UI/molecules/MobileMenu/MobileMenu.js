import { useTranslation } from "react-i18next";
import styles from "./MobileMenu.module.css";
import { Link } from "react-router-dom";
import ChangeLangBtn from "../../atoms/ChangeLngBtn/ChangeLangBtn";

const MobileMenu = ({ setIsOpen, changeLangFunc, langState, languages }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.container} container`}>
      <header className={styles.menu_header}>
        <ChangeLangBtn className={styles.mobile}
          changeLangFunc={changeLangFunc}
          langState={langState}
          languages={languages}
        />
        <button className={styles.close_btn} onClick={() => setIsOpen(false)} />
      </header>
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
