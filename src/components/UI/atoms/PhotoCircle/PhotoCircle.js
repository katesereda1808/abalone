import { useTranslation } from "react-i18next";
import styles from "./PhotoCircle.module.css";

const PhotoCircle = ({ imgUrl, imgAlt }) => {
  return (
    <div className={styles.photo}>
      <img src={imgUrl} alt={imgAlt} />
    </div>
  );
};
export default PhotoCircle;
