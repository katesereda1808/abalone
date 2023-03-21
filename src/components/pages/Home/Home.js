import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import Introduction from "./blocks/Introduction/Introduction";
import OurGoal from "./blocks/OurGoal/OurGoal";
import WhyUs from "./blocks/WhyUs/WhyUs";
import ContactUs from "./blocks/ContactUs/ContactUs";
const Home = () => {
    const { t, i18n } = useTranslation();
    return (
      <div className={`${styles.container} container`}>
        <Introduction />
        <OurGoal />
        <WhyUs />
        <ContactUs />
      </div>
    );
}
export default Home;