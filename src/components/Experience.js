import styles from "../styles/experience.module.css";
import { Graybutton } from "./Graybutton";
import { Upwork } from "./upwork";
const upworkarr = [
  {
    imgurl: "/img/Clip path group.png",
    workname: "Sr. Frontend Developer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Nov 2021 - Present",
  },
  {
    imgurl: "/img/Clip path group.png",
    workname: "Team Lead",
    description: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "ed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Jul 2017 - Oct 2021",
  },
  {
    imgurl: "/img/Clip path group.png",
    workname: "Full Stack Developer",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Dec 2015 - May 2017",
  },
];
export const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.experiencetitle}>
        <Graybutton title="Experience" />
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      {upworkarr.map((item, index) => {
        return (
          <Upwork
            key={index}
            img={item.imgurl}
            workname={item.workname}
            description={item.description}
            date={item.date}
          />
        );
      })}
    </div>
  );
};
