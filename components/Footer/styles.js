import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 15px;
  p {
    color: #86888a;
    font-size: 0.875rem;
    font-weight: 400;
    display: block;

    ${mq.medium`
      margin: 0 20px;
      display: inline-block;
    `};

    &:first-of-type {
      display: block;
      text-align: center;
      margin: 0;
      & img {
        max-width: 130px;
        margin: 0 auto 20px;
      }
    }
  }
`;
