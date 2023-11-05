import Image from 'next/image';
import styles from './feature-card.module.scss';
const { feature_card_wrapper } = styles;
export const FeatureCard = ({ title, subtitle, icon }: any) => (
  <div className={feature_card_wrapper}>
    <Image src={icon} alt='guidance' width={64} height={64}></Image>
    <div className={styles.text_wrapper}>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  </div>
);
