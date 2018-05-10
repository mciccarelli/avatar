import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { getImageSrc } from '../../utils';
import { Leadership, Projects, Contact } from '../../components';
import { SectionContainer, SectionContent } from './styles';
import {
  INTRO_ENTRY_ID,
  JOIN_US_ENTRY_ID,
  LEADERSHIP_ENTRY_ID,
  MISSION_ENTRY_ID,
  OPERATING_PRINCIPLES_ENTRY_ID,
  PROJECTS_ENTRY_ID
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
  const bgImageSrc = getImageSrc(backgroundImage);
  return (
    <SectionContainer
      backgroundImage={bgImageSrc}
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
