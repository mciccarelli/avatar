import styled from 'styled-components';
import { mq } from '../../styles';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: var(--headerHeight);
  display: flex;
  align-items: center;
  background: white;
  margin: 0 auto;
  padding: 0 1.5rem;
  ${mq.medium`
    padding: 0 2.5rem;
  `};
`;

export const Logo = styled.div`
  & img {
    width: 125px;
    height: auto;
  }
`;

export const Hamburger = styled.img`
  margin: 0 0 0 auto;
  display: flex;
  ${mq.medium`
    display: none
  `};
`;

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: none;

  &.open {
    position: absolute;
    top: var(--headerHeight);
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background: #fff;
    transform: translateY(calc(0px - var(--headerHeight)));

    & a,
    & span {
      font-size: 2rem;
    }
  }

  ${mq.medium`
    margin: 0 0 0 auto;
    display: flex;
  `};
`;

export const MenuItem = styled.li`
  text-align: center;
  margin-right: 20px;
  font-size: 16px;
  text-transform: uppercase;

  ${mq.medium`
    display: inline-block;
    &:last-of-type {
      margin-right: 0;
    }
  `};

  & a,
  & span {
    color: ${props =>
      props && props.active ? `var(--accentColor)` : `#b1b3b6`};
    cursor: pointer;
    text-decoration: none;
  }
`;
