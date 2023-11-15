import { MoreFeatureItem } from '../../elements/more-feature-item/more-feature-item';
import { Tittle } from '../../elements/title/title';
import styles from './more-features.module.scss';
export const MoreFeatures = () => (
  <div className={styles.more_features_wrapper}>
    <Tittle title="Ainda tem dúvidas?" subtitle="Veja comentários reais dos nossos alunos sobre a metodologia eagna!"></Tittle>
    <div className={styles.text_wrapper}>
      <p className={styles.text_content}>
        <span>Já basta o estresse do dia dia</span>
        <br></br>
        <strong>Marcação simplificada</strong> e <strong>Acompanhamento</strong>{' '}
        sem dor de cabeça é pensando no aluno, para atingir seu objetivo com a
        menor dificudade possível
      </p>
      <div className={styles.feature_items_wrapper}>
        <MoreFeatureItem></MoreFeatureItem>
        <MoreFeatureItem></MoreFeatureItem>
        <MoreFeatureItem></MoreFeatureItem>
        <MoreFeatureItem></MoreFeatureItem>
        <MoreFeatureItem></MoreFeatureItem>
        <MoreFeatureItem></MoreFeatureItem>
      </div>
    </div>
  </div>
);
