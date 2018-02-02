import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: ${props => (!props.bg ? '45vh' : '80vh')};
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  & .arr-down {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateY(-80px);
  width: 100%;
  max-width: var(--maxWidth);
  > div {
    text-align: left;
    max-width: ${props => (!props.homepage ? '100%' : '595px')};
    margin-bottom: ${props => (!props.homepage ? '0' : '40px')};
  }
  & h2 {
    color: var(--accentColor);
    font-size: 36px;
    line-height: 1.16;
    font-weight: 200;
    margin: 0;
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
