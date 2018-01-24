import * as React from 'react';
import { Wrap, Content } from './styles';
import { createMarkup } from '../../utils';
import Markdown from 'react-markdown';

const Hero = ({ entry, background }) => {
  const {
    fields: { content, learnMoreUrl, showLearnMore, showScrollArrow }
  } = entry;

  const { fields: { file: { url: bgImage } } } = background;

  if (!entry || !background) return <p>loading...</p>;

  return (
    <Wrap bg={`${bgImage}?w=2000&fit=scale`}>
      <Content>
        <Markdown source={content} />
        {showLearnMore && (
          <a href="#" className="cta">
            Learn More
          </a>
        )}
      </Content>
    </Wrap>
  );
};

export default Hero;
