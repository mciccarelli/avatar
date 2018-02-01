import React from 'react';
import _ from 'lodash';
import { Wrap, Arrow, Slide } from './styles';
import Slider from 'react-slick';
const arrRight = '../../../static/arr-right.svg';

// note: this is being hidden by css for now
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow flip onClick={onClick}>
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

export default class SlickSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inFocus: 0 };
    this._setInFocus = this._setInFocus.bind(this);
  }
  _setInFocus(slide) {
    this.setState({ inFocus: slide });
  }
  render() {
    const { items, facts } = this.props;
    const { inFocus } = this.state;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // beforeChange: (currentSlide, nextSlide) => {},
      afterChange: currentSlide => {
        this._setInFocus(currentSlide);
      },
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };

    return (
      <Wrap>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {facts &&
            items.map((item, idx) => {
              return (
                <Slide key={idx} focused={inFocus === idx}>
                  {item.content}
                </Slide>
              );
            })}
        </Slider>
      </Wrap>
    );
  }
}
