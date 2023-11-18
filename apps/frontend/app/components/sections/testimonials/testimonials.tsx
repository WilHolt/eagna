'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './testimonials.module.scss';
// Import Swiper styles
import 'swiper/css';
import { TestimonialCard } from '../../elements/testimonial-card/testimonial-card';
import { Tittle } from '../../elements/title/title';

export const Testimonials = () => (
  <div className={styles.wrapper}>
    <div className={styles.title_wrapper}>
      <Tittle
        title="Nossos Alunos Adoram"
        subtitle="Veja comentários reais dos nossos alunos sobre a metodologia eagna!"
      ></Tittle>
    </div>
    <Swiper
      className={styles.swiper}
      spaceBetween={40}
      slidesPerView={'auto'}
    >
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
      <SwiperSlide className={styles.swiper_slide}>
        <TestimonialCard></TestimonialCard>
      </SwiperSlide>
    </Swiper>
  </div>
);
