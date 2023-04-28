import styles from "./MemberCard.module.css";
import PhotoCircle from "../../atoms/PhotoCircle/PhotoCircle";

const MemberCard = ({ imgUrl, imgAlt, name, title, description, ShowDescription }) => {
  console.log(description)
  return (
    <div className={styles.team_member_card}>
      <div className={styles.card_top}>
        {imgUrl && (
          <div className={styles.photo_container}>
            <PhotoCircle imgUrl={imgUrl} imgAlt={imgAlt} />
          </div>
        )}
        <div className={styles.card_content}>
          <div className={styles.name}>{name}</div>
          <div
            className={`${title.length > 60 && styles.long_title} ${
              styles.title
            }`}
          >
            {title}
          </div>
        </div>
      </div>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <button onClick={ShowDescription} className={styles.chevron} />
        </summary>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </details>
    </div>
  );
};
export default MemberCard;
