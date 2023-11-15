import styles from './title.module.scss';
export const Tittle = ({ title, subtitle }: any) => (
  <div className={styles.title_wrapper}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);
