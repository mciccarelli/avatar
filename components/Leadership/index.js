import React from 'react';
import _ from 'lodash';
import { Avatar, Wrap, Content, Container, Column, Row, Modal } from './styles';

export default class Leadership extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeProfile: {}, fillBg: false };
  }
  _setProfile(profile) {
    const { activeProfile } = this.state;
    if (!_.isEmpty(activeProfile) && activeProfile.sys.id === profile.sys.id) {
      this.setState({ activeProfile: {} });
    } else {
      this.setState({ activeProfile: profile });
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
                      onClick={() => this._setProfile(item)}
                      active={
                        !_.isEmpty(activeProfile) &&
                        activeProfile.sys.id === item.sys.id
                      }
                    >
                      <Avatar
                        active={
                          !_.isEmpty(activeProfile) &&
                          activeProfile.sys.id === item.sys.id
                        }
                      >
                        <img src={item.fields.avatar.fields.file.url} />
                        <img
                          className="arrow"
                          src="/static/arr-right-mini.svg"
                        />
                      </Avatar>
                      <div>
                        <h2>{item.fields.name}</h2>
                        <p>{item.fields.title}</p>
                      </div>
                      <Modal show={!_.isEmpty(activeProfile)} />
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
