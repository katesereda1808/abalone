import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import logo from '../../assets/icons/abalone_logo-2.jpeg';

import styles from './Footer.module.css';

const Footer = () => {
    const { t } = useTranslation();
    const handleClick = () => {
        window.scrollTo({
            top: 0,
        });
    };
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
                                <li onClick={handleClick}>
                                    <Link to="/">{t('home')}</Link>
                                </li>
                                <li onClick={handleClick}>
                                    <Link to="/about">{t('about')}</Link>
                                </li>
                                <li onClick={handleClick}>
                                    <Link to="/services">{t('services')}</Link>
                                </li>
                                <li onClick={handleClick}>
                                    <Link to="/contacts">{t('contacts')}</Link>
                                </li>
                                <li onClick={handleClick}>
                                    <Link to="/legal_information">{t('legal_info')}</Link>
                                </li>
                                <li onClick={handleClick}>
                                    <Link target="_blank" to="/privacy_policy">
                                        {t('privacy_policy')}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={styles.legal_address}>
                    Société d’expertise comptable et de commissariat aux comptes SARL au capital de 100 000 XPF • RCS
                    Nouméa B 1 470 251 • + 687 23 06 00 • abalone@abalone.nc • Isabelle Cecchini • + 687 78 10 03 •
                    ic@abalone.nc •
                </div>
            </div>
        </div>
    );
};

export default Footer;
