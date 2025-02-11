import styles from "../styles/Upwork.module.css";
export const Upwork = (props) => {
  return (
    <div className={styles.upwork}>
      <img src="/img/Clip path group.png" />
      <p>{props.text}</p>
      <p>{props.date}</p>
    </div>
  );
};
