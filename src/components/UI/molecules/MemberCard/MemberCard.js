import styles from "./MemberCard.module.css";
import PhotoCircle from "../../atoms/PhotoCircle/PhotoCircle";

const MemberCard = ({ imgUrl, imgAlt, name, title, description, office }) => {
  return (
    <div className={styles.team_member_card}>
      {imgUrl && <PhotoCircle imgUrl={imgUrl} imgAlt={imgAlt} />}
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>{title}</div>
      {office && <div className={styles.office}>{office}</div>}
      <div className={styles.description}>{description}</div>
    </div>
  );
};
export default MemberCard;
