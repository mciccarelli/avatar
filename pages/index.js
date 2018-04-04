import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {
  App,
  Contact,
  Hero,
  Facts,
  Leadership,
  Accordion,
  Projects,
  Section
} from '../components';
import {
  fetchAssetById,
  fetchEntryById,
  fetchEntriesForContentType,
  fetchEntriesByType
} from '../api';

export default class HomePage extends React.Component {
  static async getInitialProps({ pathname = '/' }) {
    const aboutPageContent = await fetchEntriesForContentType({
      content_type: 'pageContainer',
      ['sys.id']: '6EBHVuTglyWckAk6yce4Q0' // filter 'about' pageContainer only
    });
    const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs');
    const facts = await fetchEntriesForContentType({ content_type: 'fact' });
    const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');
    const hero = await fetchEntriesForContentType({
      content_type: 'hero',
      ['sys.id']: '22WQgsUiA48Q8eIKaWMaU8' // filter 'homepage' hero only
    });
    const people = await fetchEntriesForContentType({
      content_type: 'person',
      order: 'sys.createdAt',
      limit: 5
    });
    const projects = await fetchEntriesForContentType({
      content_type: 'project',
      limit: 5
    });

    return {
      contact,
      facts,
      footer,
      hero: _.isArray(hero) ? hero[0] : {},
      pathname,
      people,
      learnMoreContent: aboutPageContent[0],
      projects
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      accordionOpen: false,
      accordionHeight: 0,
      accordionReady: false
    };
    this._toggleLearnMore = this._toggleLearnMore.bind(this);
  }
  componentDidMount() {
    this._calcHeight();
  }
  _toggleLearnMore() {
    const { accordionOpen } = this.state;
    if (!accordionOpen) {
      // const scrollToElement = ReactDOM.findDOMNode(this.accordionElement);
      const scrollToElement = document.querySelector('#accordion');
      // .2s delay
      setTimeout(() => {
        if (scrollToElement && !_.isEmpty(scrollToElement)) {
          // scroll to section
          scrollToElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 200);
    }

    this.setState({ accordionOpen: !accordionOpen });
  }
  _calcHeight() {
    // const height = ReactDOM.findDOMNode(this.accordionElement).clientHeight;
    const height = document.querySelector('#accordion').clientHeight;
    if (height > 0) {
      this.setState({
        accordionHeight: height,
        accordionReady: true
      });
    }
  }
  render() {
    const {
      contact,
      facts,
      footer,
      hero: { fields: heroFields },
      pathname,
      learnMoreContent,
      people,
      projects
    } = this.props;
    const { accordionOpen, accordionHeight, accordionReady } = this.state;
    const { fields: { modules } } = learnMoreContent;
    return (
      <App
        contact={contact}
        footer={footer}
        pathname={pathname}
        toggleLearnMore={() => this._toggleLearnMore()}
      >
        {!_.isEmpty(heroFields) && (
          <Hero
            homepage={true}
            toggleLearnMore={() => this._toggleLearnMore()}
            {...heroFields}
          />
        )}
        <Accordion
          ref={element => (this.accordionElement = element)}
          height={accordionHeight}
          open={accordionOpen}
          ready={accordionReady}
        >
          {modules &&
            modules.map(section => {
              const { fields, sys: { id } } = section;
              const sectionProps = {
                id,
                ...fields
              };
              return <Section key={id} {...sectionProps} />;
            })}
        </Accordion>
        <Leadership items={people} />
        {/* <Facts items={facts} /> */}
        <Projects items={projects} />
        <Contact entry={contact} />
      </App>
    );
  }
}
