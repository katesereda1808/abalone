import styles from "./ChangeLangBtn.module.css";

const ChangeLangBtn = ({ changeLangFunc, langState, languages }) => {
  return (
        <details className={`${styles.lang} ${styles.desktop}`}>
          <summary className={styles.lang__chosen}>{langState}</summary>
          <div className={styles.lang__options}>
            {languages.map((lang) => {
              return (
                <button
                  className={styles.lang__option}
                  onClick={() => changeLangFunc(lang)}
                  key={lang}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </details>
  );
};
export default ChangeLangBtn;
