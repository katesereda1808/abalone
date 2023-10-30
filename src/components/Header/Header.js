import { useTranslation } from 'react-i18next';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import logo from '../../assets/icons/logo.png';
import { LANGUAGES } from '../../constants';
import MobileMenu from '../UI/molecules/MobileMenu/MobileMenu';
import ChangeLangBtn from '../UI/atoms/ChangeLngBtn/ChangeLangBtn';

import styles from './Header.module.css';

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? styles.actual : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

const Header = () => {
    const { t, i18n } = useTranslation();
    const handleChangeLng = useCallback(
        (lng) => {
            localStorage.setItem('lng', lng);
            changeLang(lng);
            i18n.changeLanguage(lng);
        },
        [i18n]
    );

    const [lang, changeLang] = useState('fr');
    const [isOpen, setIsOpen] = useState(false);
    const navigation = ['home', 'about', 'services', 'contacts'];

    useEffect(() => {
        if (localStorage.getItem('lng')) {
            changeLang(localStorage.getItem('lng'));
        } else {
            handleChangeLng(lang);
        }
    }, [handleChangeLng, lang]);

    return (
        <div className={`${styles.header__container} container`}>
            <div className={styles.header}>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="abalone logo" />
                </Link>
                <nav className={styles.desktop}>
                    <ul className={styles.navigation}>
                        {navigation.map((page) => {
                            return (
                                <CustomLink key={page} to={page === 'home' ? '/' : `/${page}`}>
                                    {t(`${page}`)}
                                </CustomLink>
                            );
                        })}
                    </ul>
                </nav>
                <button className={`${styles.burger} ${styles.mobile}`} onClick={() => setIsOpen(true)} />
                <div className={styles.desktop}>
                    <ChangeLangBtn changeLangFunc={handleChangeLng} langState={lang} languages={LANGUAGES} />
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
};

export default Header;
