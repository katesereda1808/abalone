import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import { useState } from "react";
import ContactBtn from "../../atoms/ContactBtn/ContactBtn";
import Dropdown from "../Dropdown/Dropdown";

const Form = ({ text, color }) => {
  const [ office, setOffice ] = useState(null)
  const options = [
    { value: "boulouparis@abalone.nc", label: "Boulouparis" },
    { value: "ducos@abalone.nc", label: "Ducos" },
    { value: "lafoa@abalone.nc", label: "La Foa" },
    { value: "katesereda22@gmail.com", label: "test mail" },
  ];
  const TestButton = (e) => {
    e.preventDefault();
    console.log(office);
  }
  return (
    <form
      className={styles.form}
      action={`https://formsubmit.co/${office?office.value:''}`}
      method="POST"
    >
      <Dropdown
        placeHolder="Select..."
        options={options}
        onChange={(option) => setOffice(option)}
      />
      <input className={styles.form__input} name="name" placeholder="Name:" />
      <input className={styles.form__input} name="email" placeholder="Email:" />
      <input className={styles.form__input} name="phone" placeholder="Phone:" />
      <textarea
        className={`${styles.form__input} ${styles.form__textarea}`}
        name="message"
        placeholder="Your message:"
      />

      {/* // put thank u page */}
      <input type="hidden" name="_next" value="http://localhost:3000/"></input>
      <input type="hidden" name="_subject" value="New message!"></input>
      <input
        type="hidden"
        name="_autoresponse"
        value="Thanks for choosing our company! We got your request"
      ></input>
      <ContactBtn text={text} color={color} onClick={TestButton} />
      <button onClick={(e)=>TestButton(e)}>click</button>
    </form>
  );
};
export default Form;
