import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import { useState, useEffect, useCallback } from "react";
import ContactBtn from "../../atoms/ContactBtn/ContactBtn";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import {
  REGEMAIL,
  REGLETTERS,
  REGPHONE,
  REGNOTEMPTY,
} from "../../../../constants";

const Form = ({ btnText, options, selectPlaceholder }) => {
  const { t } = useTranslation();
  const [office, setOffice] = useState(null);
  const TestButton = (e) => {
    e.preventDefault();
    console.log(office);
  };
  const initialData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const inputErrors = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [disabled, setDisabled] = useState(true);
  const [checkBox, setcheckBox] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(inputErrors);
  const chooseOffice = (option) => {
    setOffice(option);
  };

  const clickCheckBox = () => {
    setcheckBox(!checkBox);
    console.log(checkBox);
  };
  const handleChange = (e) => {
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
    let regEx = getRegEx(e.target.name);
    if (regEx.test(e.target.value)) {
      console.log("valid");
      setErrors({
        ...errors,
        [e.target.name]: false,
      });
    }
    console.log(formData);
  };
  const getRegEx = (inputName) => {
    let regEx = null;
    switch (inputName) {
      case "name":
        // only letters
        regEx = REGLETTERS;
        break;
      case "email":
        // validation
        regEx = REGEMAIL;
        break;
      case "phone":
        // min and max of numbers
        regEx = REGPHONE;
        break;
      default:
        // not empty
        regEx = REGNOTEMPTY;
        break;
    }
    return regEx;
  };
  const validateInput = useCallback(() => {
    for (let key in formData) {
      console.log('validate')
      const input = formData[key];
      let regEx = getRegEx(`${key}`);
      console.log(key, regEx.test(input));
      if (!regEx.test(input)) {
        return false;
      }
    }
    return true;
  }, [formData]);

  const handleBlur = (e) => {
    console.log('blur')
      let regEx = getRegEx(`${e.target.name}`);
      if (!regEx.test(e.target.value)) {
        console.log('invalid');
        console.log(errors);
        setErrors({
          ...errors,
          [e.target.name]: true,
        });
      }
  }

  useEffect(() => {
    if (office && checkBox) {
      console.log("checkbox " + checkBox);
      setDisabled(() => {
        return !validateInput();
      });
    }
  }, [formData, office, checkBox, validateInput]);

  return (
    <form
      className={styles.form}
      action={`https://formsubmit.co/${office ? office.value : ""}`}
      method="POST"
    >
      <Dropdown
        placeHolder={selectPlaceholder}
        options={options}
        onChange={(option) => chooseOffice(option)}
      />
      <div className={styles.input_container}>
        <input
          className={styles.form__input}
          name="name"
          placeholder={t("form_name_placeholder")}
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div
          className={`${styles.input_error} ${
            !errors.name ? "no_opacity" : ""
          }`}
        >
          Name field is mandatory
        </div>
      </div>

      <div className={styles.input_container}>
        <input
          className={styles.form__input}
          name="email"
          placeholder={t("form_email_placeholder")}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div
          className={`${styles.input_error} ${
            !errors.email ? "no_opacity" : ""
          }`}
        >
          email incorrect
        </div>
      </div>

      <div className={styles.input_container}>
        <input
          className={styles.form__input}
          name="phone"
          placeholder={t("form_phone_placeholder")}
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div
          className={`${styles.input_error} ${
            !errors.phone ? "no_opacity" : ""
          }`}
        >
          phone incorrect
        </div>
      </div>

      <div className={styles.input_container}>
        <textarea
          className={`${styles.form__input} ${styles.form__textarea}`}
          name="message"
          placeholder={t("form_message_placeholder")}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div
          className={`${styles.input_error} ${
            !errors.message ? "no_opacity" : ""
          }`}
        >
          this field is mandatory
        </div>
      </div>

      {/* // put thank u page */}
      <input type="hidden" name="_next" value="https://abalone.bc"></input>
      <input type="hidden" name="_subject" value="New message!"></input>
      <input
        type="hidden"
        name="_autoresponse"
        value="Thank you for choosing our company! We got your request"
      ></input>
      <label>
        <input type="checkbox" checked={checkBox} onChange={clickCheckBox} />
        <p className={styles.label_text}>{t("i_agree_with")}</p>
        <Link className="link" target="_blank" to="/privacy_policy">
          {t("privacy_policy")}
        </Link>
      </label>
      <ContactBtn
        disabledMode={disabled}
        text={btnText}
        options={options}
        onClick={TestButton}
      />
    </form>
  );
};
export default Form;
