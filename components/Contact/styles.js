import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  width: 100%;
  background: #f8f8f8;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;

  & h4 {
    text-transform: uppercase;
    color: var(--accentColor);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    margin: 0 0 1rem;
  }

  & h3 {
    color: var(--accentColor);
    font-size: 1.9375rem;
    color: #9b9b9b;
    line-height: 1.16;
    font-weight: 200;
    margin: 0 0 3rem;
    max-width: 700px;
  }

  & strong {
    color: #4a4a4a;
    font-size: 1.5625rem;
    font-weight: 400;
  }

  & p {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
    color: #b1b3b6;
  }

  & a {
    color: #b1b3b6;
  }
`;
