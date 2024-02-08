import styles from './more-feature-item.module.scss';
export const MoreFeatureItem = () => (
  <div className={styles.wrapper}>
    <div className={styles.title_wrapper}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#06C96F" />
      </svg>
      <span>Programe suas aulas</span>
    </div>
    <p>Agendar as aulas que você quiser com os pontos que você adquire</p>
  </div>
);
