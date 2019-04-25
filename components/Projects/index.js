import React from 'react';
import _ from 'lodash';
import Markdown from 'react-markdown';
import { Wrap, Content, Container, Logo, Modal, Row } from './styles';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeProject: {}, showModal: false };
  }
  _setProject(project) {
    const { activeProject } = this.state;
    if (!_.isEmpty(activeProject) && activeProject.sys.id === project.sys.id) {
      this.setState({ activeProject: {}, showModal: false });
    } else {
      this.setState({ activeProject: project, showModal: true });
    }
  }
  render() {
    const {
      items,
      backgroundImage,
      backgroundPosition,
      backgroundSize
    } = this.props;
    const { activeProject, showModal } = this.state;
    let imageSrc = false;
    if (backgroundImage && !_.isEmpty(backgroundImage)) {
      const {
        fields: {
          file: { url: bgImageSrc }
        }
      } = backgroundImage;
      imageSrc = bgImageSrc;
    }
    return (
      <Wrap
        id="portfolio"
        backgroundImage={imageSrc}
        backgroundPosition={backgroundPosition}
        backgroundSize={backgroundSize}
      >
        <Container>
          <h4>Portfolio</h4>
          <Row centered={!showModal}>
            {items &&
              items.map((item, idx) => {
                return (
                  <Logo
                    key={idx}
                    onClick={() => this._setProject(item)}
                    active={
                      !_.isEmpty(activeProject) &&
                      activeProject.sys.id === item.sys.id
                    }
                  >
                    <img
                      className={!showModal ? 'centered' : 'pulled'}
                      src={item.fields.brand.fields.file.url}
                      title=""
                      alt=""
                    />
                  </Logo>
                );
              })}
          </Row>
          <Modal show={showModal !== false}>
            {activeProject && !_.isEmpty(activeProject) && (
              <div>
                <h2>{activeProject.fields.name}</h2>
                {activeProject.fields.url && (
                  <p className="url">
                    <a
                      href={activeProject.fields.url}
                      title={`Visit ${activeProject.fields.url}`}
                      target="_blank"
                    >
                      {activeProject.fields.url.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                  </p>
                )}
                {activeProject.fields.description && (
                  <p className="description">
                    {activeProject.fields.description}
                  </p>
                )}
                {activeProject.fields.content && (
                  <Markdown source={activeProject.fields.content} />
                )}
                <img
                  src="/static/i-close.svg"
                  onClick={() => this.setState({ showModal: false })}
                />
              </div>
            )}
          </Modal>
        </Container>
      </Wrap>
    );
  }
}
