import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  ${mq.medium`
    padding: 2rem 1rem;
  `};

  p {
    color: #86888a;
    font-size: 0.75rem;
    font-weight: 400;
    display: block;

    ${mq.medium`
      margin: 0 15px;
      display: inline-block;
    `};

    &:first-of-type {
      margin: 0 5px 10px 0;
      & img {
        max-width: 130px;
        max-height: 10px;
        transform: translateY(2px);
      }
    }
  }
`;
