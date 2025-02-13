import styles from "../styles/Upwork.module.css";

export const Upwork = (props) => {
  return (
    <div className={styles.upwork}>
      <img src={props.img} />
      <div className={styles.description}>
        <h2>{props.workname}</h2>
        <div className={styles.list}>
          <ul>
            {props.description.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
      <p>{props.date}</p>
    </div>
  );
};
