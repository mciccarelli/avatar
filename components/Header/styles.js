import styled from 'styled-components';
import { mq } from '../../styles';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: var(--headerHeight);
  padding: 0 40px;
  display: flex;
  align-items: center;
  background: white;
  margin: 0 auto;
`;

export const Logo = styled.div`
  & img {
    width: 100px;
    height: auto;
  }
`;

export const Menu = styled.ul`
  margin: 0 0 0 auto;
  list-style-type: none;
  display: none;
  ${mq.medium`
    display: flex;
  `};
`;

export const MenuItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-size: 16px;
  text-transform: uppercase;
  &:last-of-type {
    margin-right: 0;
  }

  & a {
    color: ${props => (props && props.active ? `var(--accentColor)` : `#b1b3b6`)};
    text-decoration: none;
  }
`;
