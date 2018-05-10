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
import {
  LEADERSHIP_ENTRY_ID,
  PROJECTS_ENTRY_ID,
  JOIN_US_ENTRY_ID
} from '../constants';

import { getFields } from '../utils';

export default class HomePage extends React.Component {
  static async getInitialProps({ pathname = '/' }) {
    // NOTE: using snake case to flag raw contentful data responses
    const hp_container = await fetchEntriesForContentType({
      content_type: 'pageContainer',
      ['sys.id']: '1y2FncyiEgMy2a4Y4iM8eW' // filter 'Home Page' only
    });
    const lm_container = await fetchEntriesForContentType({
      content_type: 'pageContainer',
      ['sys.id']: '6EBHVuTglyWckAk6yce4Q0' // filter 'Learn More' only
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
    // const facts = await fetchEntriesForContentType({ content_type: 'fact' });
    const footer_entry = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');

    return {
      hpContainer: hp_container.pop(),
      lmContainer: lm_container.pop(),
      footerEntry: footer_entry,
      pathname,
      people,
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
  get heroFields() {
    return getFields(this.props.hpContainer.fields.hero);
  }
  get lmSections() {
    return this.props.lmContainer.fields.sections;
  }
  get hpSections() {
    return this.props.hpContainer.fields.sections;
  }
  get navItems() {
    let items = ['about'];
    this.props.hpContainer.fields.sections.map(section => {
      let n =
        section.fields && section.fields.name
          ? section.fields.name.toLowerCase()
          : false;
      if (n === 'join us') items.push('contact');
      else if (n) items.push(n);
    });
    return items;
  }
  _toggleLearnMore() {
    const { accordionOpen } = this.state;
    if (!accordionOpen) {
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
    const height = document.querySelector('#accordion').clientHeight;
    if (height > 0) {
      this.setState({
        accordionHeight: height,
        accordionReady: true
      });
    }
  }
  render() {
    const { accordionOpen, accordionHeight, accordionReady } = this.state;
    const {
      hpContainer,
      lmContainer,
      footerEntry,
      pathname,
      people,
      projects,
      contact
    } = this.props;

    return (
      <App
        pathname={pathname}
        navItems={this.navItems}
        footer={footerEntry}
        toggleLearnMore={() => this._toggleLearnMore()}
      >
        {!_.isEmpty(this.heroFields) && (
          <Hero
            toggleLearnMore={() => this._toggleLearnMore()}
            {...this.heroFields}
          />
        )}
        <Accordion
          ref={element => (this.accordionElement = element)}
          height={accordionHeight}
          open={accordionOpen}
          ready={accordionReady}
        >
          {this.lmSections.map(section => {
            const {
              fields,
              sys: { id }
            } = section;
            const sectionProps = {
              id,
              ...fields
            };
            return <Section key={id} {...sectionProps} />;
          })}
        </Accordion>
        {this.hpSections.map(section => {
          const {
            fields,
            sys: { id }
          } = section;
          const sectionProps = {
            id,
            ...fields
          };

          if (id === LEADERSHIP_ENTRY_ID)
            return <Leadership items={people} {...sectionProps} />;
          if (id === PROJECTS_ENTRY_ID)
            return <Projects items={projects} {...sectionProps} />;
          if (id === JOIN_US_ENTRY_ID) return <Contact entry={section} />;
        })}
      </App>
    );
  }
}
