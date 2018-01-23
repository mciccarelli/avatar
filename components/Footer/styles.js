import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  span {
    color: var(--mediumGray);
    padding-right: 5px;
    display: block;
    ${mq.medium`
      padding-right: 20px;
      display: inline-block;
    `};
  }
`;
