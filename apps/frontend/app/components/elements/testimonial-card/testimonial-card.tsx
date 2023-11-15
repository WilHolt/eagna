import styles from './testimonial-card.module.scss';
import quotes from '../../../../public/images/modules/home/quotes.png';
import Image from 'next/image';
export const TestimonialCard = () => (
  <div className={styles.wrapper}>
    <Image className={styles.quotes} src={quotes} alt='quotes' width={50}></Image>
    <div className={styles.text_wrapper}>
      <p>
        Muito boa a aula, consegui focar e aprender o necessário para conseguir<br/>
        passar no vestibular, e finalmente fazer o curso que eu tanto sonhei,<br/>
        agradeço muito a equipe do Eagna por todo apoio, Muito boa a aula,<br/>
        consegui focar e aprender o necessário para
      </p>
    </div>
    <div className={styles.author}>
      <span>Fernanda</span>
    </div>
  </div>
);
