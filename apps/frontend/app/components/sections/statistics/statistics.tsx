import styles from './statistics.module.scss';
export const Statistics = () => (
  <div className={styles.wrapper}>
    <div className={styles.box}>
      <div className={styles.box_item}>
        <span className={styles.count}>100+</span>
        <span className={styles.label}>Alunos</span>
      </div>
      <div className={styles.box_item + ' '+ styles.dashed}>
        <span className={styles.count}>100+</span>
        <span className={styles.label}>Horas Aula</span>
      </div>
      <div className={styles.box_item}>
        <span className={styles.count}>24h</span>
        <span className={styles.label}>Atendimento</span>
      </div>
    </div>
  </div>
);
