import { useTranslation } from "react-i18next";
import styles from "./About.module.css"
import CompanyStory from "./blocks/CompanyStory/CompanyStory";
import Force from "./blocks/Force/Force";
import Motto from "./blocks/Motto/Motto";
import Team from "./blocks/Team/Team";
const About = () => {
    const { t, i18n } = useTranslation();
    return (
      <div className={styles.container}>
        <CompanyStory />
        <Motto />
        <Force />
        <Team />
      </div>
    );
}
export default About;