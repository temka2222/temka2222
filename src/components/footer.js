import styles from "../styles/footer.module.css";
import { Graybutton } from "./Graybutton";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <Graybutton title="Get in touch" />
      <div className={styles.footertxt}>
        <p>What’s next? Feel free to reach out to me if you're looking for</p>
        <p> adeveloper, have a query, or simply want to connect.</p>
      </div>
      <div className={styles.contact}>
        <div>
          <img src="/img/Iconemail.png" />
          <h2>tom@pinecone.mn</h2>
          <img src="/img/Iconcopy.png" />
        </div>
        <div>
          <img src="/img/Icontel.png" />
          <h2>+976 88112233</h2>
          <img src="/img/Iconcopy.png" />
        </div>
        <div className={styles.social} style={{ flexDirection: "column" }}>
          <p>You may also find me on these platforms!</p>

          <div className={styles.socialimg}>
            <img src="/img/Icon Button.png" />
            <img src="/img/twitter.png" />
            <img src="/img/pigmaicon.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
