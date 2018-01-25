import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  background-image: linear-gradient(-206deg, #EEEEEE 0%, #D8D8D8 100%);
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 40px 0;

  & h4 {
    text-transform: uppercase;
    color: var(--accentColor);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 0;
  }
`;
