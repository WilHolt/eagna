import React from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
const { logo_wrapper, nav_wrapper, menu_list_wrapper , logo_text } = styles;
export const Navbar = () => (
  <nav className={nav_wrapper}>
    <div className={logo_wrapper}>
      <Image
        src={'/images/modules/home/eagna-nav-logo.svg'}
        alt="logo"
        width={36}
        height={28}
      ></Image>
      <div className={logo_text}>Eagna</div>
    </div>
    <ul className={menu_list_wrapper}>
        <li>Inicio</li>
        <li>Como Funciona?</li>
        <li>Nossos Professores</li>
        <li>Perguntas Frequentes</li>
        <li>Contato</li>
    </ul>
  </nav>
);
