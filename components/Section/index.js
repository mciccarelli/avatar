import * as React from 'react';
import _ from 'lodash';
import { Wrap, Content } from './styles';
import Link from 'next/link';
import Markdown from 'react-markdown';

const Section = ({
  backgroundImage,
  content,
  useCustomListStyle,
  useWhiteText
}) => {
  let bgImageSrc = false;
  if (backgroundImage && !_.isEmpty(backgroundImage)) {
    const { fields: { file: { url } } } = backgroundImage;
    bgImageSrc = url;
  }

  return (
    <Wrap bg={bgImageSrc && `${bgImageSrc}`}>
      <Content
        useWhiteText={useWhiteText}
        fullSpan={!bgImageSrc}
        useCustomListStyle={useCustomListStyle}
      >
        <Markdown source={content} />
      </Content>
    </Wrap>
  );
};

export default Section;
