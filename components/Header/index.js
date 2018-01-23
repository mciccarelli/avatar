import * as React from 'react';
import { Wrap, Logo, NavLinks } from './styles';

export default () => (
  <Wrap>
    <Logo>
      <img src="../static/avatar-logo.svg" />
    </Logo>
    <NavLinks>
      <li>
        <a href="void(0)">Mission</a>
      </li>
      <li>
        <a href="void(0)">Team</a>
      </li>
      <li>
        <a href="void(0)">Portfolio</a>
      </li>
      <li>
        <a href="void(0)">News</a>
      </li>
      <li>
        <a href="void(0)">Contact</a>
      </li>
    </NavLinks>
  </Wrap>
);
