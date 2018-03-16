import React from 'react';
import _ from 'lodash';
import { App, Contact, Hero, Facts, Leadership, Projects } from '../components';
import {
  fetchAssetById,
  fetchEntryById,
  fetchEntriesForContentType,
  fetchEntriesByType
} from '../api';

const HomePage = ({
  contact,
  facts,
  footer,
  hero: { fields: heroFields },
  pathname,
  people,
  projects
}) => (
  <App contact={contact} footer={footer} pathname={pathname}>
    {!_.isEmpty(heroFields) && <Hero homepage={true} {...heroFields} />}
    <Leadership items={people} />
    <Facts items={facts} />
    <Projects items={projects} />
    <Contact entry={contact} />
  </App>
);

HomePage.getInitialProps = async ({ pathname = '/' }) => {
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
    projects
  };
};

export default HomePage;
