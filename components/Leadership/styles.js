import _ from 'lodash';
import styled, { css } from 'styled-components';
import { mq } from '../../styles';

const avatarSize = '113px';

export const Wrap = styled.div`
  background-image: linear-gradient(-149deg, #d8d8d8 15%, #ffffff 100%);
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: ' ';
    transform: translateX(30px) scale(1.25);
    transform-origin: center left;
    background-position: ${props =>
      props.backgroundPosition ? props.backgroundPosition : 'center right'};
    background-image: url(${props =>
      props.backgroundImage
        ? props.backgroundImage
        : '/static/leadership-bg.png'});
    background-size: ${props =>
      props.backgroundSize ? props.backgroundSize : 'contain'};
    background-repeat: no-repeat;

    ${mq.medium`
      background-size: inherit;
      transform: translateX(0);

    `};
  }

  & .contain {
    padding: 2rem 1rem;
    ${mq.medium`
      padding: 3rem 1rem;
    `};
  }

  & h4 {
    text-transform: uppercase;
    color: var(--accentColor);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 1.5rem;
    ${mq.medium`
      margin-bottom: 2.5rem;
    `};
  }
`;

export const Container = styled.div`
  max-width: 590px;
  min-height: ${props => (props.filled ? '290px' : 'none')};
  position: relative;
  transition: background 0.22s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background: ${props => (!props.filled ? 'none' : 'rgb(255, 255, 255)')};

  ${mq.medium`
    background: ${props =>
      !props.filled ? 'none' : 'rgba(255, 255, 255, 0.85)'};
    margin-left: 2.5rem;
  `};
`;

export const Person = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-end;
  z-index: 2;
  overflow: hidden;
  margin-bottom: ${props => (!props.last ? '20px' : '0')};

  & section {
    transition: opacity 0.2s ease;
    opacity: ${props => (props.zoom ? '0' : '1')};
    visibility: ${props => (props.show ? 'hidden' : 'visible')};
  }

  & h2 {
    font-size: 1.6875rem;
    font-weight: 200;
    line-height: 1.1111;
    margin: 0;
    transform: ${props => (props.isActive ? 'translateY(-100px)' : '')};
  }

  & h3 {
    font-size: 1.3125rem;
    font-weight: 200;
    line-height: 1;
    text-transform: uppercase;
    color: var(--accentColor);
    margin: 0;
  }
`;

export const Avatar = styled.div`
  position: relative;
  line-height: 0;

  & img {
    max-width: ${avatarSize};
    margin-right: 20px;
  }

  & .arrow {
    position: absolute;
    bottom: 8px;
    right: 8px;
    transform: ${props => (!props.isActive ? 'rotate(0)' : 'rotate(-180deg)')};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  width: calc(100% - ${avatarSize});
  height: 100%;
  padding: 20px;
  transition: transform 600ms, opacity 600ms;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: ${props => (!props.show ? 'translateY(100%)' : 'translateY(0)')};
  opacity: ${props => (!props.show ? '0' : '1')};
  visibility: ${props => (!props.show ? 'hidden' : 'visible')};

  & section {
    overflow-y: auto;
    height: 100%;
    &::-webkit-scrollbar {
      width: 11px;
    }

    &::-webkit-scrollbar-track {
      background-color: #d8d8d8;
      box-shadow: none;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--accentColor);
      outline: 0;
    }
  }

  > div {
    background: white;
    padding: 20px;
    position: relative;
  }

  & h2 {
    font-size: 1.6875rem;
    font-weight: 200;
    line-height: 1.1111;
    margin: 0;
  }

  & h3 {
    font-size: 1.3125rem;
    font-weight: 200;
    line-height: 1;
    text-transform: uppercase;
    color: var(--accentColor);
    margin: 0 0 1.25rem;
  }

  p {
    font-size: 1rem;
    font-weight: 200;
    color: #231f20;
    max-width: 390px;
    margin: 0 0 0.625rem;
  }
`;
