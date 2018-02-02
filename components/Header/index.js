import * as React from 'react';
import Link from 'next/link';
import { Wrap, Container, Logo, NavLinks } from './styles';

export default () => (
  <Wrap>
    <Container>
      <Logo>
        <Link href="/" prefetch>
          <a>
            <img src="../static/avatar-logo.svg" />
          </a>
        </Link>
      </Logo>
      <NavLinks>
        <li>
          <Link href="/mission" prefetch>
            <a>Mission</a>
          </Link>
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
