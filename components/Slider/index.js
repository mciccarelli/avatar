import React, { Component } from 'react';
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

export default class SlickSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { inFocus: 0 };
    this.setFocus = this.setFocus.bind(this);
  }
  setFocus(idx) {
    this.setState({ inFocus: idx });
  }
  render() {
    const { items } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // beforeChange: (currentSlide, nextSlide) => { },
      afterChange: currentSlide => {
        this.setFocus(currentSlide);
      },
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };
    return (
      <Wrap>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {items.map((item, idx) => {
            return (
              <Slide key={idx} focused={this.state.inFocus === idx}>
                <h2>{item.text}</h2>
              </Slide>
            );
          })}
        </Slider>
      </Wrap>
    );
  }
}
