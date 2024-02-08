'use client';
import React, { useState } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import { MediaBreakpoint } from 'apps/frontend/app/core/model/media-breakpoints';
import { Button, Drawer, Menu } from 'antd';
import toggleIcon from '/public/images/svg-icons/navbar/mobile-menu-toggle.svg';
import type { GetProp, MenuProps } from 'antd';

type MenuTheme = GetProp<MenuProps, 'theme'>;
type MenuItem = GetProp<MenuProps, 'items'>[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const { logo_wrapper, nav_wrapper, menu_list_wrapper, logo_text } = styles;
export const Navbar = () => {
  const isMobile = !useMediaQuery(MediaBreakpoint.medium, {
    initializeWithValue: false,
  });

  const [isSidebarOpen, updateSidebarToggle] = useState(false);

  const items: MenuItem[] = [
    getItem('Inicio One', '1'),
    getItem('Como funciona?', '2'),
    getItem('Perguntas Frequentes', '3'),
    getItem('Contato', '4'),
  ];
  return (
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
      {!isMobile && (
        <ul className={menu_list_wrapper}>
          <li>
            <Link href={''}>Inicio</Link>
          </li>
          <li>
            <Link href={''}>Como Funciona?</Link>
          </li>
          <li>
            <Link href={''}>Perguntas Frequentes</Link>
          </li>
          <li>
            <Link href={''}>Contato</Link>
          </li>
        </ul>
      )}
      {isMobile && (
        <Button
          type="text"
          shape="circle"
          icon={<Image src={toggleIcon} alt="toggle" width={24}
          height={24}></Image>}
          onClick={() => updateSidebarToggle(true)}
        />
      )}

      <Drawer
        extra={
          <div className={logo_wrapper}>
            <Image
              src={'/images/modules/home/eagna-nav-logo.svg'}
              alt="logo"
              width={36}
              height={28}
            ></Image>
            <div className={logo_text}>Eagna</div>
          </div>
        }
        open={isSidebarOpen}
        onClose={() => updateSidebarToggle(false)}
      >
        <Menu items={items}></Menu>
      </Drawer>
    </nav>
  );
};
