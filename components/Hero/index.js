import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { getImageSrc, validVideoSource } from '../../utils';
import Markdown from 'react-markdown';
import {
  Arrow,
  Overlay,
  HeroContainer,
  HeroContent,
  VideoContainer
} from './styles';

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
  showLearnMore,
  toggleLearnMore,
  videoUrl
}) => {
  const hasVideo = validVideoSource(videoUrl);
  const bgImageSrc = getImageSrc(backgroundImage);
  return (
    <HeroContainer
      bg={!_.isEmpty(bgImageSrc) && `${bgImageSrc}?w=2000&fit=scale`}
      video={hasVideo}
    >
      <HeroContent overlay={hasVideo}>
        <Markdown source={content} />
        {showLearnMore && (
          <a onClick={toggleLearnMore} className="cta">
            Learn More
          </a>
        )}
      </HeroContent>
      {hasVideo && <VideoBackground video={videoUrl} poster={bgImageSrc} />}
    </HeroContainer>
  );
};

export default Hero;
