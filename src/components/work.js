import styles from "../styles/work.module.css";
import { Graybutton } from "./Graybutton";
const workarr = [
  {
    img: "/img/Picture3.png",
    workname: "UBCab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technology: [
      "React",
      "next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    img: "/img/Picture2.png",
    workname: "Mentorhub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technology: [
      "React",
      "next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    img: "/img/Picture.png",
    workname: "iToim",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technology: [
      "React",
      "next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];
export const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.worktitle}>
        <Graybutton title="Work" />
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      {workarr.map((item, index) => {
        return (
          <div
            className={styles.work}
            key={index}
            style={{
              flexDirection: index == 1 ? "row-reverse" : "row",
            }}
          >
            <div className={styles.workimg}>
              <img src={item.img} />
            </div>
            <div className={styles.worktext}>
              <h3>{item.workname}</h3>
              <p>{item.description}</p>
              <div className={styles.technology}>
                {item.technology.map((itm, idx) => {
                  return <Graybutton key={idx} title={itm} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
