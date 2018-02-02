import * as React from 'react';
import { Wrap } from './styles';
import Markdown from 'react-markdown';

const Footer = ({ entry: { fields: { content } } }) => (
  <Wrap>
    <div className="contain">
      <Markdown source={content} />
    </div>
  </Wrap>
);

export default Footer;
