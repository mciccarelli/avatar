import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  overflow: hidden;
  text-align: center;
  padding-top: var(--headerHeight);
  section {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:nth-child(1) {
      min-height: 100vh;
      justify-content: flex-start;
    }
  }
`;
