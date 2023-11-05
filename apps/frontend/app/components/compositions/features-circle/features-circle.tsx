'use client';

import React, { useEffect, useState } from 'react';
import styles from './features-circle.module.scss';
// ICONS

import header_circle_tablet from '../../../../public/images/svg-icons/feature-card/header_circle_tablet.png';
import header_circle_mobile from '../../../../public/images/svg-icons/feature-card/header_circle_mobile.png';
import header_circle from '../../../../public/images/svg-icons/feature-card/header-circle.png';
import Image, { StaticImageData } from 'next/image';

const { circle_wrapper } = styles;

export const FeaturesCircle = () => {
  const [img, setImg] = useState<StaticImageData>(header_circle);

  useEffect(() => {
    const tablet = window.matchMedia('(min-width: 768px)');
    const large = window.matchMedia('(min-width: 1366px)');
    const xlarge = window.matchMedia('(min-width: 1920px)');

    if (tablet.matches) {
      return setImg(header_circle_tablet);
    }
    if (large.matches) {
      return setImg(header_circle);
    }

    if (xlarge.matches) {
      return setImg(header_circle);
    }

    return setImg(header_circle_mobile);

    // if (tablet.matches) {
    //   setImg(header_circle_tablet);
    // }
  });

  return (
    <div className={styles.circle_wrapper}>
      <div className={styles.circle}>
        <Image src={img} alt=""></Image>
      </div>
    </div>
  );
};
