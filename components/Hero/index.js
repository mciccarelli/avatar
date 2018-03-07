import React from 'react';
import _ from 'lodash';
import { HeroContainer, HeroContent, VideoContainer } from './styles';
import Link from 'next/link';
import Markdown from 'react-markdown';

const Hero = ({
  backgroundImage,
  content,
  learnMoreUrl,
  showLearnMore,
  showScrollArrow,
  videoUrl,
  homepage = false
}) => {
  let bgImageSrc = false;
  if (backgroundImage && !_.isEmpty(backgroundImage)) {
    const { fields: { file: { url } } } = backgroundImage;
    bgImageSrc = url;
  }

  const validVideoSource = url => {
    return url && url.indexOf('.mp4') > -1;
  };

  return (
    <HeroContainer
      bg={
        !validVideoSource(videoUrl) &&
        bgImageSrc &&
        `${bgImageSrc}?w=2000&fit=scale`
      }
    >
      <HeroContent homepage={homepage}>
        <Markdown source={content} />
        {showLearnMore &&
          homepage && (
            <Link href={learnMoreUrl}>
              <a className="cta">Learn More</a>
            </Link>
          )}
      </HeroContent>
      {validVideoSource(videoUrl) && (
        <VideoContainer>
          <video
            id="video-background"
            poster={`${bgImageSrc}?w=2000&fit=scale`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        </VideoContainer>
      )}
      {showScrollArrow &&
        !homepage && <img className="arr-down" src="/static/arr-down.svg" />}
    </HeroContainer>
  );
};

export default Hero;
