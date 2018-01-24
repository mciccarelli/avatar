import * as React from 'react';
import dynamic from 'next/dynamic';
import { Wrap, Content } from './styles';
const Slider = dynamic(import('../Slider'), { ssr: false });

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Facts = () => {
  return (
    <Wrap>
      <Content>
        <div className="contain">
          <h4>The Facts</h4>
        </div>
        <Slider {...sliderSettings}>
          <div>
            <h3>37 Million Children are Clinicaly Depressed.</h3>
          </div>
          <div>
            <h3>
              Three of Every Four People with a Mental Illness is Misdiagnosed
              for Years Before Getting Correct Help.
            </h3>
          </div>
          <div>
            <h3>
              Three of Every Four People with a Mental Illness is Misdiagnosed
              for Years Before Getting Correct Help.
            </h3>
          </div>
        </Slider>
      </Content>
    </Wrap>
  );
};

export default Facts;
