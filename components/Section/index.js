import * as React from 'react';
import _ from 'lodash';
import { SectionContainer, SectionContent } from './styles';
import Link from 'next/link';
import Markdown from 'react-markdown';

// Contentful Entity IDS
const INTRO_SECTION_ID = '4CSI4rV5PaYOS4M2o8KKao';
const MISSION_SECTION_ID = 'Qx3mHdoYIUUUOI42scESe';
const OPERATING_PRINCIPLES_ID = '1A9Rkots0AmoYUKqGOiI6y';

const Section = ({
  id,
  backgroundImage,
  backgroundColor,
  backgroundPosition,
  backgroundSize,
  content,
  useCustomListStyle
}) => {
  let imageSrc = false;
  if (backgroundImage && !_.isEmpty(backgroundImage)) {
    const { fields: { file: { url: bgImageSrc } } } = backgroundImage;
    imageSrc = bgImageSrc;
  }

  return (
    <SectionContainer
      backgroundImage={imageSrc}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      backgroundColor={backgroundColor}
    >
      <SectionContent
        intro={id === INTRO_SECTION_ID}
        mission={id === MISSION_SECTION_ID}
        principles={id === OPERATING_PRINCIPLES_ID}
        useCustomListStyle={useCustomListStyle}
      >
        <Markdown source={content} />
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
