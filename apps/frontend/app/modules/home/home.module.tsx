import React from 'react';
import { Navbar } from '../../components/core/navbar/navbar';
import { HeaderCTA } from '../../components/sections/header-cta/header-cta';
import { MoreFeatures } from '../../components/sections/more-features/more-features';
import styles from './home.module.scss'
import { TestimonialCard } from '../../components/elements/testimonial-card/testimonial-card';
import { Testimonials } from '../../components/sections/testimonials/testimonials';
export const HomeModule = () => (
  <div className={styles.home_wrapper}>
    <Navbar></Navbar>
    <HeaderCTA></HeaderCTA>
    <MoreFeatures></MoreFeatures>
    <Testimonials></Testimonials>
  </div>
);
