import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 1rem;
  background-image: linear-gradient(-149deg, #d8d8d8 15%, #ffffff 100%);
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  background-position: ${props =>
    props.backgroundPosition ? props.backgroundPosition : 'center center'};
  background-size: ${props =>
    props.backgroundSize ? props.backgroundSize : 'cover'};

  &:first-of-type {
    background-image: linear-gradient(-149deg, #d8d8d8 15%, #bebebe 100%);
  }

  ${props =>
    props.backgroundImage &&
    css`
      background-image: url(${props => props.backgroundImage});
      background-repeat: no-repeat;
      &::before {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: '';
        z-index: 1;
        background: rgba(000, 000, 000, 0.2);
      }
    `};
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;
  z-index: 2;

  & h3,
  & h2,
  & h1,
  & p {
    max-width: 550px;
    margin: 0 0 2rem;
  }

  & h1 {
    color: ${props => (props.mission || props.intro ? '#ffffff' : '#9B9B9B')};
    font-size: 25px;
    line-height: 1.15;
    font-weight: 200;
    margin-bottom: 3rem;
    max-width: ${props => (props.mission ? '845px' : '550px')};

    ${mq.medium`
      font-size: 56px;
      line-height: 1;
    `};
  }

  h2 {
    color: var(--accentColor);
    font-size: 1.75rem;
    font-weight: 200;
    letter-spacing: 0.04em;
    margin-bottom: 3rem;
  }

  & h3 {
    font-size: 1.25rem;
    line-height: 1.15;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2469rem;
    margin-bottom: 1rem;
    color: ${props => (props.intro ? '#ffffff' : 'var(--accentColor)')};
  }

  & p {
    color: ${props => (props.mission ? '#ffffff' : '#231f20')};
    font-size: 20px;
    font-weight: 200;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  & ul {
    list-style: none;
    display: block;
    padding: 0;
    margin-top: 2rem;

    & li {
      font-size: 1.25rem;
      font-weight: 200;
      line-height: 1.2;
      color: #231f20;
      box-sizing: border-box;
      margin: 0 0 1rem;
      ${props =>
        props.useCustomListStyle &&
        css`
          position: relative;
          padding-left: 23px;
          &::before {
            background-image: url('/static/i-li.svg');
            background-size: 11px 10px;
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(-65%);
            left: 0;
            width: 11px;
            height: 10px;
          }
        `};
    }
  }

  > div > *:last-child {
    margin-bottom: 0;
  }

  ${props =>
    props.intro &&
    css`
      p:first-of-type {
        margin-bottom: 1rem;
        & img {
          width: 82px;
        }
      }
      h1,
      h2,
      h3 {
        max-width: 620px;
      }
      h1 {
        margin-bottom: 0.625rem;
      }
      h2 {
        margin-bottom: 2rem;
      }
    `};

  ${props =>
    props.principles &&
    css`
      h1,
      h2 {
        margin-bottom: 1rem;
        max-width: 800px;
      }
    `};
`;
