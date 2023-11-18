'use client';
import { Classier } from 'apps/frontend/app/utils/utility';
import styles from './faq-item.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import arrow from '../../../../public/images/svg-icons/faq/faq_arrow_up.svg';
export const FaqItem = ({ question, awnser }: any) => {
  const [open, setOpen] = useState(false);
  let contentRef: HTMLDivElement | null = null;
  let panelRef: HTMLDivElement | null = null;
  useEffect(() => {}, []);
  const updateState = () => {
    console.log('set open', open);
    if (panelRef && contentRef) {
      if (!open) {
        panelRef.style.height = contentRef.offsetHeight + 24 + 50 + 'px';
        panelRef.style.padding = 24 + 'px';
      } else {
        panelRef.style.height = 60 + 'px';
      }
    }
    setOpen(!open);
  };
  return (
    <div
      ref={(el) => (panelRef = el)}
      className={Classier({
        [styles.wrapper]: true,
      })}
    >
      <div className={styles.header} onClick={() => updateState()}>
        <div
          className={Classier({
            [styles.square]: true,
            active: open,
          })}
        >
          <Image src={arrow} alt={''}></Image>
        </div>
        <div className={styles.title}>{question}</div>
      </div>
      <div ref={(el) => (contentRef = el)} className={styles.content}>
        {awnser}
      </div>
    </div>
  );
};
