import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Logo, Menu, MenuItem, NavContainer } from './styles';

const handleRoute = (e, pathname, section) => {
  e.preventDefault();
  Router.push(pathname).then(() => {
    const scrollToElement = document.querySelector(`#${section}`);
    // .2s delay
    setTimeout(() => {
      if (scrollToElement) {
        // scroll to section
        scrollToElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
  });
};

export default ({ pathname }) => (
  <NavContainer>
    <Logo>
      <Link prefetch href="/">
        <a>
          <img src="../static/avatar-logo.svg" />
        </a>
      </Link>
    </Logo>
    <Menu>
      <MenuItem active={pathname && pathname === `/mission`}>
        <Link prefetch href="/mission">
          <a>Mission</a>
        </Link>
      </MenuItem>
      <MenuItem>
        <span onClick={e => handleRoute(e, '/', 'leadership')}>Team</span>
      </MenuItem>
      <MenuItem>
        <span onClick={e => handleRoute(e, '/', 'projects')}>Portfolio</span>
      </MenuItem>
      <MenuItem>
        <span onClick={e => handleRoute(e, '/', 'news')}>News</span>
      </MenuItem>
      <MenuItem>
        <span onClick={e => handleRoute(e, '/', 'contact')}>Contact</span>
      </MenuItem>
    </Menu>
  </NavContainer>
);
