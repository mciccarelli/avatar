import * as React from 'react';
import { Wrap, Content } from './styles';
import Link from 'next/link';
import Markdown from 'react-markdown';

const Hero = ({ entry, background = false, homepage = false }) => {
  const {
    fields: { content, learnMoreUrl, showLearnMore, showScrollArrow }
  } = entry;

  return (
    <Wrap bg={background !== false && `${background}?w=2000&fit=scale`}>
      <Content homepage={homepage}>
        <Markdown source={content} />
        {showLearnMore &&
          homepage !== false && (
            <Link href="/mission">
              <a className="cta">Learn More</a>
            </Link>
          )}
      </Content>
      {showScrollArrow &&
        !homepage && <img className="arr-down" src="/static/arr-down.svg" />}
    </Wrap>
  );
};

export default Hero;
