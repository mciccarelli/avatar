import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${mq.medium`
    min-height: ${props => (!props.bg ? '45vh' : '80vh')};
  `} & .arr-down {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
  }

  /* & video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);

    &::after {
      padding-bottom: 56%;
    }
  } */
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  & video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
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
    max-width: ${props => (!props.homepage ? '100%' : '595px')};
    margin-bottom: ${props => (!props.homepage ? '0' : '40px')};
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

    &::before {
      content: '< ';
    }
    &::after {
      content: ' >';
    }
  }
`;
