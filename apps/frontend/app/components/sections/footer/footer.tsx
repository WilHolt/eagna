import Image from 'next/image';
import styles from './footer.module.scss';
import eagna_white from '../../../../public/images/modules/home/white_logo_small.svg';
import { Classier } from 'apps/frontend/app/utils/utility';

const { logo, column, company, pages, title, socials, copyright, content_row} = styles;
export const Footer = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={content_row}>
        <div
          className={Classier({
            [column]: true,
            [company]: true,
          })}
        >
          <div className={logo}>
            <Image src={eagna_white} alt="123"></Image>
            <span>Eagna</span>
          </div>
          <div className={styles.location}>
            <span>Rua Zé Limeira 3002, Natal - RN</span>
          </div>
        </div>
        <div
          className={Classier({
            [pages]: true,
            [column]: true,
          })}
        >
          <span className={title}>Paginas</span>
          <ul>
            <li>
              {' '}
              <a href="">Inicio</a>{' '}
            </li>
            <li>
              <a href="">Como Funciona?</a>{' '}
            </li>
            <li>
              <a href="">Perguntas Frequentes</a>{' '}
            </li>
            <li>
              <a href="">Contato</a>{' '}
            </li>
          </ul>
        </div>
        <div
          className={Classier({
            [column]: true,
            [socials]: true,
          })}
        >
          <span className={styles.title}>Nossas Redes Sociais</span>
          <ul>
            <li>
              <a href="">Instagram</a>{' '}
            </li>
            <li>
              <a href="">Linkedin</a>{' '}
            </li>
            <li>
              <a href="">Facebook</a>{' '}
            </li>
          </ul>
        </div>
      </div>
      <span className={copyright}>Todos os direitos reservados Eagna ©2023</span>
    </div>
  </div>
);
