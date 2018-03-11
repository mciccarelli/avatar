import React from 'react';
import _ from 'lodash';
import {
  Arrow,
  Overlay,
  HeroContainer,
  HeroContent,
  VideoContainer
} from './styles';
import Link from 'next/link';
import Markdown from 'react-markdown';

// check if video source is an .mp4
const validVideoSource = url => url && url.indexOf('.mp4') > -1;

// render video player in a 16x9 aspect ratio container
const VideoBackground = ({ video, poster }) => {
  return (
    <video
      poster={`${poster}?w=2000&fit=scale`}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={video} type="video/mp4" />
    </video>
  );
};

const Hero = ({
  backgroundImage,
  content,
  homepage,
  learnMoreUrl,
  showLearnMore,
  showScrollArrow,
  videoUrl
}) => {
  const hasVideo = validVideoSource(videoUrl);
  let bgImageSrc = false;
  if (backgroundImage && !_.isEmpty(backgroundImage)) {
    const { fields: { file: { url } } } = backgroundImage;
    bgImageSrc = url;
  }

  return (
    <HeroContainer
      bg={bgImageSrc && `${bgImageSrc}?w=2000&fit=scale`}
      video={hasVideo}
    >
      <HeroContent homepage={homepage} overlay={hasVideo}>
        <Markdown source={content} />
        {showLearnMore && (
          <Link href={learnMoreUrl}>
            <a className="cta">Learn More</a>
          </Link>
        )}
      </HeroContent>
      {hasVideo && <VideoBackground video={videoUrl} poster={bgImageSrc} />}
      {showScrollArrow && <Arrow src="/static/arr-down.svg" />}
    </HeroContainer>
  );
};

export default Hero;
