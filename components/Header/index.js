import * as React from 'react';
import { Wrap, Container, Logo, NavLinks } from './styles';

export default () => (
  <Wrap>
    <Container>
      <Logo>
        <img src="../static/avatar-logo.svg" />
      </Logo>
      <NavLinks>
        <li>
          <a href="javascript:void(0)">Mission</a>
        </li>
        <li>
          <a href="javascript:void(0)">Team</a>
        </li>
        <li>
          <a href="javascript:void(0)">Portfolio</a>
        </li>
        <li>
          <a href="javascript:void(0)">News</a>
        </li>
        <li>
          <a href="javascript:void(0)">Contact</a>
        </li>
      </NavLinks>
    </Container>
  </Wrap>
);
