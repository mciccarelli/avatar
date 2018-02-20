import React from 'react';
import { Wrap, Content } from './styles';
import Markdown from 'react-markdown';

const Contact = ({ entry }) => {
  const { fields: { content, title } } = entry;

  return (
    <Wrap id="contact">
      <Content>
        <h4>{title}</h4>
        <Markdown source={content} />
      </Content>
    </Wrap>
  );
};

export default Contact;
