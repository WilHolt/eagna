import React from 'react';
import styles from './button.module.scss';
export const EAGButton = ({ children }: any) => (
  <a className={styles.button_wrapper}>{children}</a>
);
