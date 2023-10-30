import CompanyStory from './blocks/CompanyStory/CompanyStory';
import Force from './blocks/Force/Force';
import Motto from './blocks/Motto/Motto';
import Team from './blocks/Team/Team';

import styles from './About.module.css';

const About = () => {
    return (
        <div className={`${styles.container} container`}>
            <CompanyStory />
            <Motto />
            <Force />
            <Team />
        </div>
    );
};

export default About;
