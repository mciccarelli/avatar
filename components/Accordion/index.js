import * as React from 'react';
import { AccordionContainer, AccordionContent } from './styles';
import Markdown from 'react-markdown';

const Accordion = ({ height, open, ready, children }) => (
  <AccordionContainer id="accordion">
    <AccordionContent open={open} ready={ready} height={height}>
      {children}
    </AccordionContent>
  </AccordionContainer>
);

export default Accordion;
