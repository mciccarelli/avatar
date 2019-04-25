import styled from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
  background-position: ${props =>
    props.backgroundPosition ? props.backgroundPosition : 'center center'};
  background-size: ${props =>
    props.backgroundSize ? props.backgroundSize : 'cover'};
  background-image: url(${props =>
    props.backgroundImage ? props.backgroundImage : '/static/projects-bg.jpg'});
  background-repeat: no-repeat;

  & h4 {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    margin: 0 0 3rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  position: relative;
  flex: 1;
  margin: 0 auto;
  padding: 2rem 1rem;
  ${mq.medium`
    padding: 10rem 1rem;
  `};
`;

export const Row = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  overflow: hidden;
  padding-left: 20px;

  ${mq.large`
    padding-left: 0;
  `};
`;

export const Logo = styled.div`
  z-index: 2;
  float: left;
  width: calc(50% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  ${mq.large`
    width: calc(33% - 20px);
    &:nth-child(2n) {
      margin-right: 20px;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  `};

  & img {
    max-width: 100%;
    transition: all var(--transitionSpeed) ease-in-out;
    &.pulled {
      opacity: ${props => (!props.active ? '0.35' : '1')};
      filter: ${props =>
        !props.active ? 'blur(3px) grayscale(1) ' : 'blur(0) grayscale(0)'};
    }
  }
`;

export const Modal = styled.div`
  transition: all var(--transitionSpeed) ease-in-out;
  transition-delay: ${props => (!props.show ? '0' : '0.5s')};
  opacity: ${props => (!props.show ? '0' : '1')};
  visibility: ${props => (!props.show ? 'hidden' : 'visible')};
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 80px;
  right: 0;
  background: white;

  ${mq.medium`
    top: 120px;
  `};

  ${mq.large`
    position: absolute;
    display: flex;
    top: 238px;
    right: 46px;
    max-width: 637px;
    min-height: 610px;
    height: auto;
  `};

  > div {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    padding: 1.5rem;

    ${mq.medium`
      position: relative;
      top: auto;
      left: auto;
    `};
  }

  & h2 {
    font-size: 1.6875rem;
    font-weight: 200;
    line-height: 1.1111;
    margin: 0;
  }

  & .url {
    color: var(--accentColor);
    text-transform: uppercase;
    margin: 0;
  }

  & p {
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.15;
    margin: 0 0 10px;

    &.description {
      color: #9ea1a2;
    }
  }

  & img {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
`;
