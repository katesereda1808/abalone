import { useTranslation } from "react-i18next";
import styles from "./ContactBtn.module.css";
import { useState } from "react";

const ContactBtn = ({ text, btnColor, textColor }) => {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: btnColor, color: textColor }}
    >
      {text}
    </button>
  );
};
export default ContactBtn;
