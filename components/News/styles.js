import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  background-image: linear-gradient(-206deg, #eeeeee 0%, #d8d8d8 100%);
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1.5rem;
  ${mq.medium`
    padding: 2.5rem 0;
  `};

  & h4 {
    text-transform: uppercase;
    color: var(--accentColor);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2rem;
    line-height: 1.15625;
    color: var(--mediumGray);
  }
`;
