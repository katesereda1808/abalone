import styles from "./ContactBtn.module.css";

const ContactBtn = ({ text, btnColor }) => {
  return (
    <button
      className={`${styles.btn} ${btnColor === "white_btn" && styles.white_btn}`}
    >
      {text}
    </button>
  );
};
export default ContactBtn;
