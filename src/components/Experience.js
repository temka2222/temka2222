import styles from "../styles/experience.module.css";
import { Graybutton } from "./Graybutton";
import { Upwork } from "./upwork";
export const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.experiencetitle}>
        <Graybutton title="Experience" />
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <Upwork text="Sr. Frontend Developer" date="Nov 2021 - Present" />
    </div>
  );
};
