import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  position: relative;
  & .slick-list {
    padding: 0 60px;
  }

  & .slick-slide {
    padding-right: 40px;

    & h3 {
      color: white;
    }
  }

  & .slick-active {
    &:first-child h3 {
      filter: blur(0px);
    }
    h3 {
      filter: blur(5px);
    }
  }
`;

export const Arrow = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  z-index: 10;
`;
