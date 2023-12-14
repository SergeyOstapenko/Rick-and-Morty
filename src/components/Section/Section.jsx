import styles from "./Section.module.scss";

export const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <div>
        {title && <h2 className={title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};
