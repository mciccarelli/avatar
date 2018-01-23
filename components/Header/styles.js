import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--headerHeight);
  padding: 0 40px;
`;

export const Logo = styled.a`
  & img {
    width: 100px;
    height: auto;
  }
`;

export const NavLinks = styled.ul`
  margin: 0 0 0 auto;
  list-style-type: none;

  & li {
    display: inline-block;
    margin-right: 20px;
    font-size: 16px;
    text-transform: uppercase;
    &:last-of-type {
      margin-right: 0;
    }

    & a {
      color: #B1B3B6;
      text-decoration: none;
    }
  }
`;