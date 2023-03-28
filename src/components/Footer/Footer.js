import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import logo from "../../assets/icons/abalone_logo-2.jpeg";


const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <img src={logo} alt="abalone logo" />
            </div>
            <nav className={styles.nav}>
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
          </div>

          <Link to="/contacts" className={styles.legal_info}>
            {t("legal_info")}
          </Link>
        </div>
        <div className={styles.legal_address}>
          Société d’expertise comptable et de commissariat aux comptes SARL au
          capital de 100 000 XPF • RCS Nouméa B 1 470 261 687 23 06 00 •
          abalone@abalone.nc Isabelle Cecchini • 687 78 10 03 • ic@abalone.nc
        </div>
      </div>
    </div>
  );
};
export default Footer;
