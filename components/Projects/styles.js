import styled, { keyframes } from 'styled-components';
import { mq } from '../../styles';

const pullLogos = keyframes`
  0% { left: 50%; transform: translate(-50%, -50%); }
  100% { left: 0; transform: translate(0, -50%); }
`;

const centerLogos = keyframes`
  0% { left: 0; transform: translate(0, -50%); }
  100% { left: 50%; transform: translate(-50%, -50%); }
`;

export const Wrap = styled.div`
  background-image: url('/static/projects-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 60vh;
  display: flex;

  &:hover {
    & h4 {
      opacity: 1;
      visibility: visible;
    }
  }

  & h4 {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 40px;
    transition: opacity var(--transitionSpeed) ease;
    opacity: 0;
    visibility: hidden;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  position: relative;
  flex: 1;
  margin: 0 auto;
  padding: 1.5rem;
  ${mq.medium`
    padding: 2.5rem 0;
  `};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: ${props => (!props.centered ? '0' : '50%')};
  transform: ${props =>
    !props.centered ? 'translate(0, -50%)' : 'translate(-50%, -50%)'};
  animation: 0.5s ${props => (!props.centered ? pullLogos : centerLogos)} normal;
  padding-left: ${props => (!props.centered ? '8px' : '0')};
`;

export const Logo = styled.div`
  max-width: 310px;
  margin-bottom: 20px;
  z-index: 2;

  &:last-of-type {
    margin-bottom: 0;
  }

  & img {
    max-width: 100%;
    margin-bottom: 20px;
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
  position: absolute;
  z-index: 3;
  width: 100%;
  max-width: 355px;
  min-height: 280px;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);

  > div {
    background: white;
    padding: 15px;
    position: relative;
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
    top: 10px;
    right: 10px;
  }
`;
