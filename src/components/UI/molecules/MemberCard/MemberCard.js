import { useTranslation } from "react-i18next";
import styles from "./MemberCard.module.css";
import { useState } from "react";
import PhotoCircle from "../../atoms/PhotoCircle/PhotoCircle";

const MemberCard = ({ imgUrl, imgAlt, name, title, description }) => {
  return (
    <div className={styles.team_member_card}>
      <PhotoCircle imgUrl={imgUrl} imgAlt={imgAlt} />
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
export default MemberCard;
