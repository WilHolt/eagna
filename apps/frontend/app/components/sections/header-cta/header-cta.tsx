import React from 'react';
import styles from './header-cta.module.scss';
import { FeaturesCircle } from '../../compositions/features-circle/features-circle';
import { EAGButton } from '../../core/button/button';
const { header_wrapper } = styles;
export const HeaderCTA = () => (
  <div className={styles.container}>
    <div className={header_wrapper}>
      <div className={styles.circle_wrapper}>
        <FeaturesCircle></FeaturesCircle>
      </div>
      <div className={styles.text_wrapper}>
        <h1 className={styles.h1_cta}>
          SEU <span className={styles.purple_mark}>FILHO</span> MERECE UMA VIDA
          ESCOLAR <span className={styles.red_mark}>SFORIMENTO!</span>
        </h1>
        <p>
          Nossa metodologia é pensada para atingir seu objetivo com a menor
          dificudade possível
        </p>
        <EAGButton>Contratar as melhores aulas!</EAGButton>
      </div>
    </div>
  </div>
);
