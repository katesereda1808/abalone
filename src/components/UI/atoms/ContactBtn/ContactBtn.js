import styles from "./ContactBtn.module.css";

const ContactBtn = ({ text, btnColor, disabledMode }) => {
  return (
    <button
      className={`${styles.btn} ${
        btnColor === "white_btn" && styles.white_btn
      }`}
      // {disabledMode?'disabled':''}
      disabled={disabledMode}
    >
      {text}
    </button>
  );
};
export default ContactBtn;
