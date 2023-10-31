import Introduction from './blocks/Introduction/Introduction';
import OurGoal from './blocks/OurGoal/OurGoal';
import WhyUs from './blocks/WhyUs/WhyUs';
import ContactUs from './blocks/ContactUs/ContactUs';

import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={`${styles.container} container`}>
            <Introduction />
            <OurGoal />
            <WhyUs />
            <ContactUs />
        </div>
    );
};

export default Home;
