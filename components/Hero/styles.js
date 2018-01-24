import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 81vh;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateY(-80px);
  width: 100%;
  max-width: var(--maxWidth);
  > div {
    max-width: 595px;
    text-align: left;
    margin-bottom: 40px;
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
