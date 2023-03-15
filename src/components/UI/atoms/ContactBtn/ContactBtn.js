import { useTranslation } from "react-i18next";
import styles from "./ContactBtn.module.css";
import { useState } from "react";

const ContactBtn = ({ text, color }) => {
  return (
    <button className={styles.btn} style={{ backgroundColor: { color } }}>
      {text}
    </button>
  );
};
export default ContactBtn;
