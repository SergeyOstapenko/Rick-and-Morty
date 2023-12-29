import styles from "./DescriptionListItem.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const DescriptionListItem = ({ name, image, status, species, id }) => {
  const statusColor = classNames({
    [styles.containerStatusUnknown]: status === "unknown",
    [styles.containerStatusDead]: status === "Dead",
    [styles.containerStatusAlive]: status === "Alive",
  });

  return (
    <li className={styles.item}>
      <Link to={`/creature/${id}`}>
        <article className={styles.article}>
          <img src={image} alt={name} width="229px" className={styles.img} />
          <div className={styles.container}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.container_status}>
              <div className={statusColor}></div>
              <p className={styles.status}>
                {status} - {species}
              </p>
            </div>
            <div>
              <p className={styles.text_properties}>Last known location:</p>
              <p className={styles.text_values}></p>
            </div>
            <div>
              <p className={styles.text_properties}>First seen in:</p>
              <p className={styles.text_values}></p>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};
