import React from 'react';
import Markdown from 'react-markdown';
import { getImageAttributes } from '../../utils';
import { SectionContainer, SectionContent } from './styles';
import {
  INTRO_ENTRY_ID,
  MISSION_ENTRY_ID,
  OPERATING_PRINCIPLES_ENTRY_ID
} from '../../constants';

const Section = ({
  id,
  backgroundImage,
  backgroundColor,
  backgroundPosition,
  backgroundSize,
  content,
  useCustomListStyle
}) => {
  const bgImage = getImageAttributes(backgroundImage);
  return (
    <SectionContainer
      backgroundImage={bgImage && bgImage.url ? bgImage.url : ''}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      backgroundColor={backgroundColor}
    >
      <SectionContent
        intro={id === INTRO_ENTRY_ID}
        mission={id === MISSION_ENTRY_ID}
        principles={id === OPERATING_PRINCIPLES_ENTRY_ID}
        useCustomListStyle={useCustomListStyle}
      >
        {content && <Markdown source={content} />}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
