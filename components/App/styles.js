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
  & main {
    margin: 0 auto;
    width: 100%;
    padding: 0 20%;
    ${mq.medium`
      padding: 0 22%;
    `} 
    ${mq.large`
      padding: 0;
      max-width: var(--maxWidth);
    `} 
    h2 {
      font-size: 1.35rem;
      font-weight: 200;
      display: block;
      margin-bottom: 0;
      ${mq.medium`
        font-size: 2rem;
      `};
    }
    p {
      font-size: 1.125rem;
      line-height: 1.35;
      font-weight: 200;
      margin-top: 0;
      margin-bottom: 3.125rem;
      ${mq.medium`
        font-size: 1.5rem;
        line-height: 1.5;
      `} 
      &.about {
        color: var(--accentColor);
      }
      &.areas {
        opacity: 0.8;
      }
      &.contact {
        color: var(--accentColor);
        margin-bottom: 0;
      }
    }
    a {
      text-decoration: none;
      color: var(--accentColor);
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .logo-lg {
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: 0 auto 3.125rem;
  }
  .logo-sm {
    margin: 0 auto 20px;
    max-width: 100px;
    height: auto;
    ${mq.medium`
      max-width: 130px;
    `};
  }
`;
