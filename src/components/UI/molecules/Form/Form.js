import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import { useState } from "react";
import ContactBtn from "../../atoms/ContactBtn/ContactBtn";
import Dropdown from "../Dropdown/Dropdown";

const Form = ({ btnText, btnColor, options, selectPlaceholder }) => {
  const { t } = useTranslation();
  const [office, setOffice] = useState(null);
  const TestButton = (e) => {
    e.preventDefault();
    console.log(office);
  };

  return (
    <form
      className={styles.form}
      action={`https://formsubmit.co/${office ? office.value : ""}`}
      method="POST"
    >
      <Dropdown
        placeHolder={selectPlaceholder}
        options={options}
        onChange={(option) => setOffice(option)}
      />
      <input
        className={styles.form__input}
        name="name"
        placeholder={t("form_name_placeholder")}
      />
      <input
        className={styles.form__input}
        name="email"
        placeholder={t("form_email_placeholder")}
      />
      <input
        className={styles.form__input}
        name="phone"
        placeholder={t("form_phone_placeholder")}
      />
      <textarea
        className={`${styles.form__input} ${styles.form__textarea}`}
        name="message"
        placeholder={t("form_message_placeholder")}
      />

      {/* // put thank u page */}
      <input type="hidden" name="_next" value="http://localhost:3000/"></input>
      <input type="hidden" name="_subject" value="New message!"></input>
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for choosing our company! We got your request"
      ></input>
      <ContactBtn text={btnText} options={options} onClick={TestButton} />
    </form>
  );
};
export default Form;
