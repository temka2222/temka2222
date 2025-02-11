import styles from "../styles/hero.module.css";
export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.herotext}>
        <h1>Hi, I’m Tom 👋</h1>
        <p>
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className={styles.location}>
          <img src="/img/map.png" />
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className={styles.project}>
          <img src="/img/greenicon.png" />
          <p>Available for new projects</p>
        </div>
        <div className={styles.herroimg}>
          <img src="/img/Icon Button.png" />
          <img src="/img/twitter.png" />
          <img src="/img/pigmaicon.png" />
        </div>
      </div>
      <div className={styles.mypic}>
        <img src="/img/Pic.png" />
      </div>
    </div>
  );
};
