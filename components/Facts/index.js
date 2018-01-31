import * as React from 'react';
import dynamic from 'next/dynamic';
import { Wrap, Content } from './styles';
import Markdown from 'react-markdown';
const Slider = dynamic(import('../Slider'), { ssr: false });

const Facts = ({ items }) => {
  const sliderItems = items.map(item => {
    return {
      content: React.createElement(
        'div',
        null,
        <Markdown source={item.fields.content} />
      )
    };
  });

  return (
    <Wrap>
      <Content>
        <div className="contain">
          <h4>The Facts</h4>
        </div>
        <Slider items={sliderItems} facts />
      </Content>
    </Wrap>
  );
};

export default Facts;
