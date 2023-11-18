import { EAGButton } from '../../core/button/button';
import { Tittle } from '../../elements/title/title';
import styles from './order-now.module.scss';
export const OrderNow = () => (
  <div className={styles.wrapper}>
    <Tittle
      title="Agende suas aulas agora mesmo"
      subtitle="Entre em contato diretamente pelo whatsapp e marque suas aulas"
    ></Tittle>
    <EAGButton
      src="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F558499568297%3Ftext%3DOl%25C3%25A1%2521%2BVim%2Bpelo%2BInstagram.%2BGostaria%2Bde%2Bmais%2Binforma%25C3%25A7%25C3%25B5es%2Bsobre...&e=AT14gLvxfBgdiMcfSZ2nvO9_9SCiOB-TKfuL4BBp1EogaE-CAVSZmlhKrGVmLBT20qCijde8Rj-gb2E8unYi7Gcf9oMA5jYWZ-GGGR7AF7hLl_hhlAbjHA"
      target="__blank"
    >
      Agendar Aulas
    </EAGButton>
  </div>
);
