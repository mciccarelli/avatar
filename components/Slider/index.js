import * as React from 'react';
import { Wrap, Arrow } from './styles';
import Slider from 'react-slick';
const arrRight = '../../../static/arr-right.svg';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow style={{ left: '40px', right: 'auto' }} onClick={onClick}>
      <img
        style={{
          transform: 'scaleX(-1)'
        }}
        src={arrRight}
      />
    </Arrow>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow onClick={onClick}>
      <img src={arrRight} />
    </Arrow>
  );
}

const defaultSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};

export default ({ children, settings = defaultSettings }) => (
  <Wrap>
    <Slider {...defaultSettings}>{children}</Slider>
  </Wrap>
);
