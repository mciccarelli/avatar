import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  position: relative;

  & .slick-loading {
    text-align: center;
  }
`;

export const Slide = styled.div`
  padding-right: 50px;
  transition: filter var(--transitionSpeed) ease-in;
  filter: ${props =>
    props.focused && !props.className.includes('cloned')
      ? 'blur(0)'
      : 'blur(5px)'};
  h2 {
    font-size: 32px;
    color: white;
  }
`;

export const Arrow = styled.div`
  display: ${props => (props.flip ? 'none' : 'block')};
  right: ${props => (props.flip ? 'auto' : '0')};
  left: ${props => (props.flip ? '0' : 'auto')};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
`;
