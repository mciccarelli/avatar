import React from 'react';
import { Wrap, Content, Container, Column, Row } from './styles';

export default class Leadership extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeProfile: false, fillBg: false };
  }
  _setProfile(idx) {
    if (this.state.activeProfile === idx) {
      // console.log('clicked while open... should close');
      this.setState({ activeProfile: false });
    } else {
      // console.log('setting activeProfile', idx);
      this.setState({ activeProfile: idx });
    }
  }
  _setBgFill(fill) {
    this.setState({ fillBg: fill });
  }
  render() {
    const { items } = this.props;
    const { activeProfile, fillBg } = this.state;
    return (
      <Wrap>
        <div className="contain">
          <h4>Leadership</h4>
          <Container filled={fillBg !== false}>
            <Row>
              {items &&
                items.map((item, idx) => {
                  return (
                    <Column
                      key={idx}
                      onMouseEnter={() => this._setBgFill(true)}
                      onMouseLeave={() => this._setBgFill(false)}
                      onClick={() => this._setProfile(idx)}
                      active={activeProfile && activeProfile === idx}
                    >
                      <img src={item.fields.avatar.fields.file.url} />
                      <div>
                        <h2>{item.fields.name}</h2>
                        <p>{item.fields.title}</p>
                      </div>
                    </Column>
                  );
                })}
            </Row>
          </Container>
        </div>
      </Wrap>
    );
  }
}
