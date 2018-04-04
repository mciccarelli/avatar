import styled, { css } from 'styled-components';
import { mq } from '../../styles';

export const AccordionContainer = styled.div`
  transition: 0.4s;
  position: relative;
  overflow: hidden;
`;

export const AccordionContent = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  transition: 200ms ease-in-out;
  ${props =>
    props.ready &&
    !props.open &&
    css`
      max-height: 0px;
    `};

  ${props =>
    props.ready &&
    props.open &&
    props.height &&
    css`
      max-height: ${props.height}px;
    `};
`;
