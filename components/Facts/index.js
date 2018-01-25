import * as React from 'react';
import dynamic from 'next/dynamic';
import { Wrap, Content } from './styles';
const Slider = dynamic(import('../Slider'), { ssr: false });

const facts = [
  { text: '37 Million Children are Clinicaly Depressed.' },
  {
    text:
      'Three of Every Four People with a Mental Illness is Misdiagnosed for Years Before Getting Correct Help.'
  },
  {
    text:
      'Three of Every Four People with a Mental Illness is Misdiagnosed for Years Before Getting Correct Help.'
  }
];

const Facts = () => {
  return (
    <Wrap>
      <Content>
        <div className="contain">
          <h4>The Facts</h4>
        </div>
        <Slider items={facts} />
      </Content>
    </Wrap>
  );
};

export default Facts;
