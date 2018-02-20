import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const Wrap = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem;
  width: 100vw;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  ${mq.large`
    min-height: 45vh;
    padding: 4rem 0 2rem;
  `};
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: 0 auto;

  & h3,
  & h2,
  & p {
    max-width: 550px;
    margin: 0 0 2rem;
  }

  & h3 {
    font-size: 1.25rem;
    line-height: 1.15;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2469rem;
    color: var(--accentColor);
  }

  & h2 {
    color: ${props => (props.useWhiteText ? '#ffffff' : '#9B9B9B')};
    font-size: 25px;
    line-height: 1.15;
    font-weight: 200;
    max-width: ${props => (!props.fullSpan ? '550px' : 'none')};

    ${mq.medium`
      font-size: 56px;
      line-height: 1;
    `};
  }

  & p {
    color: #231f20;
    font-size: 20px;
    font-weight: 200;
    line-height: 1.2;
  }

  & ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    & li {
      box-sizing: border-box;
      list-style-image: ${props =>
        props.useCustomListStyle ? 'url(/static/i-li.svg)' : 'none'};
      margin-bottom: ${props => (props.useCustomListStyle ? '30px' : '10px')};

      ${mq.medium`
        width: ${props => (props.useCustomListStyle ? '25%' : '100%')};
        padding-right: ${props => (props.useCustomListStyle ? '90px' : '0')};
      `};
    }
  }
`;
