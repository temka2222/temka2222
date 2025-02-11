import styles from "../styles/Skills.module.css";
import { Graybutton } from "./Graybutton";
const Skillimg = [
  { imgurl: "/img/icon-javscript.svg", name: "Javascript" },
  { imgurl: "/img/icon-typescript.svg", name: "typescript" },
  { imgurl: "/img/icon-react.svg", name: "React" },
  { imgurl: "/img/icon-nextjs.svg", name: "Next.js" },
  { imgurl: "/img/icon-nodejs.svg", name: "Node.js" },
  { imgurl: "/img/icon-express.svg", name: "Express.js" },
  { imgurl: "/img/icon-nest.svg", name: "Nest.js" },
  { imgurl: "/img/icon-socket.svg", name: "Socket.io" },
  { imgurl: "/img/icon-postgresql.svg", name: "postgreSQL" },
  { imgurl: "/img/icon-mongodb.svg", name: "MongoDB" },
  { imgurl: "/img/icon-sass.svg", name: "Sass/Scss" },
  { imgurl: "/img/icon-figma.svg", name: "Figma" },
  { imgurl: "/img/icon-tailwindcss.svg", name: "Tailwindcss" },
  { imgurl: "/img/icon-cypress.svg", name: "Cypress" },
  { imgurl: "/img/icon-storybook.svg", name: "Storybook" },
  { imgurl: "/img/icon-git.svg", name: "Git" },
];
export const Skill = () => {
  return (
    <div className={styles.container}>
      <div>
        <Graybutton title="Skills" />
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className={styles.skillsimg}>
        {Skillimg.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.imgurl} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
