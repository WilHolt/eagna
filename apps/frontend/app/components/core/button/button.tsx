import React from 'react';
import styles from './button.module.scss';
export const EAGButton = ({ src, target, children }: any) => (
  <a
    href={src}
    target={target}
    className={styles.button_wrapper + ' ' + styles.cta}
  >
    {children}
  </a>
);
