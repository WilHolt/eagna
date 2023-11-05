import React from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
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
        <li><Link href={""}>Inicio</Link></li>
        <li><Link href={""}>Como Funciona?</Link></li>
        <li><Link href={""}>Perguntas Frequentes</Link></li>
        <li><Link href={""}>Contato</Link></li>
    </ul>
  </nav>
);
