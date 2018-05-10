import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${mq.medium`
    min-height: ${props => (!props.bg ? '45vh' : '80vh')};
  `};

  & video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
    display: none;
    ${mq.large`
      display: block; 
    `};
  }
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateY(-80px);
  width: 100%;
  padding: 0 1.5rem;
  max-width: var(--maxWidth);

  > div {
    text-align: left;
    max-width: 920px;
    margin-bottom: 40px;
  }

  & h2 {
    color: var(--accentColor);
    font-size: 25px;
    line-height: 1.16;
    font-weight: 200;
    margin: 0;

    ${mq.medium`
      font-size: 36px;
    `};
  }
  & .cta {
    color: #b1b3b6;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;

    &::before {
      content: '< ';
    }
    &::after {
      content: ' >';
    }
  }
  ${props =>
    props.overlay &&
    css`
      position: absolute;
      top: 50%;
      z-index: 5;
      transform: translateY(-50%);
    `};
`;
