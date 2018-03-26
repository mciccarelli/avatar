import React from 'react';
import _ from 'lodash';
import Markdown from 'react-markdown';
import { Avatar, Wrap, Content, Container, Person, Overlay } from './styles';

export default class Leadership extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeProfile: {}, fillBg: false };
  }
  _isActive(id) {
    const { activeProfile } = this.state;
    return !_.isEmpty(activeProfile) && activeProfile.sys.id === id;
  }
  _setBgFill(fill) {
    this.setState({ fillBg: fill });
  }
  _setProfile(profile) {
    const { activeProfile } = this.state;
    const reset =
      !_.isEmpty(activeProfile) && activeProfile.sys.id === profile.sys.id;
    this.setState({ activeProfile: !reset ? profile : {} });
  }
  render() {
    const { items } = this.props;
    const { activeProfile, fillBg } = this.state;
    return (
      <Wrap id="leadership">
        <div className="contain">
          <h4>Leadership</h4>
          <Container
            filled={fillBg || (activeProfile && !_.isEmpty(activeProfile))}
            profile={activeProfile}
          >
            {items &&
              items.map((item, idx) => {
                const {
                  sys: { id },
                  fields: { avatar, name, profile, title }
                } = item;
                return (
                  <Person
                    key={idx}
                    onMouseEnter={() => this._setBgFill(true)}
                    onMouseLeave={() => this._setBgFill(false)}
                    onClick={() => this._setProfile(item)}
                    isActive={this._isActive(id)}
                    zoom={!_.isEmpty(activeProfile)}
                    last={idx === items.length - 1}
                  >
                    <Avatar isActive={this._isActive(id)}>
                      <img src={avatar && avatar.fields.file.url} />
                      <img className="arrow" src="/static/arr-right-mini.svg" />
                    </Avatar>
                    <section>
                      <h2>{name}</h2>
                      <h3>{title}</h3>
                    </section>
                  </Person>
                );
              })}
            {!_.isEmpty(activeProfile) &&
              activeProfile.fields && (
                <Overlay show={!_.isEmpty(activeProfile)}>
                  <section>
                    <h2>{activeProfile.fields.name}</h2>
                    <h3>{activeProfile.fields.title}</h3>
                    <Markdown source={activeProfile.fields.profile} />
                  </section>
                </Overlay>
              )}
          </Container>
        </div>
      </Wrap>
    );
  }
}
