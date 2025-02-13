import styles from "../styles/navbar.module.css";
export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>TOM</h2>
      </div>
      <div className={styles.home}>
        <div>About</div>
        <div>Work</div>
        <div>Testimonials</div>
        <div>Contact</div>
        <div>
          <img src="/img/Icon.png" />
        </div>
        <button>Download CV</button>
      </div>
    </div>
  );
};
