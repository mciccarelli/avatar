import React from 'react';
import _ from 'lodash';
import { Wrap, Content } from './styles';
import Link from 'next/link';
import Markdown from 'react-markdown';

const Hero = ({
  backgroundImage,
  content,
  learnMoreUrl,
  showLearnMore,
  showScrollArrow,
  homepage = false
}) => {
  let bgImageSrc = false;
  if (backgroundImage && !_.isEmpty(backgroundImage)) {
    const { fields: { file: { url } } } = backgroundImage;
    bgImageSrc = url;
  }

  return (
    <Wrap bg={bgImageSrc && `${bgImageSrc}?w=2000&fit=scale`}>
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
