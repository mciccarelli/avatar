import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  background-image: linear-gradient(-149deg, #ffffff 15%, #d8d8d8 100%);
  min-height: 60vh;
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    content: ' ';
    background-image: url('/static/leadership-bg.png');
    background-repeat: no-repeat;
    background-position: center right;
  }

  & .contain {
    padding: 40px 0;
  }

  & h4 {
    text-transform: uppercase;
    color: var(--accentColor);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  max-width: 580px;
  margin-left: 40px;
  position: relative;
  transition: background 0.22s ease-in-out;
  background: ${props =>
    !props.filled ? 'none' : 'rgba(255, 255, 255, 0.85)'};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-end;
  margin-bottom: 20px;
  z-index: 2;

  &:last-of-type {
    margin-bottom: 0;
  }

  & img {
    max-width: 113px;
    margin-right: 20px;
  }

  & h2 {
    font-size: 1.6875rem;
    font-weight: 200;
    line-height: 1.1111;
    margin: 0;
  }

  & p {
    font-size: 1.3125rem;
    font-weight: 200;
    line-height: 1;
    text-transform: uppercase;
    color: var(--accentColor);
    margin: 0;
  }
`;
