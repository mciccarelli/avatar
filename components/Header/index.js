import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Logo, Menu, MenuItem, NavContainer } from './styles';

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
        <a href="javascript:void(0)">Team</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:void(0)">Portfolio</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:void(0)">News</a>
      </MenuItem>
      <MenuItem>
        <a href="javascript:void(0)">Contact</a>
      </MenuItem>
    </Menu>
  </NavContainer>
);
