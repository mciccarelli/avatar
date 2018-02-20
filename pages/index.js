import React from 'react';
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
  heroAsset,
  heroEntry,
  pathname,
  people,
  projects
}) => {
  const { fields: { file: { url: heroHackground } } } = heroAsset;
  return (
    <App contact={contact} footer={footer} pathname={pathname}>
      <Hero entry={heroEntry} background={heroHackground} homepage={true} />
      <Facts items={facts} />
      <Leadership items={people} />
      <Facts items={facts} />
      <Projects items={projects} />
      <Contact entry={contact} />
    </App>
  );
};

HomePage.getInitialProps = async ({ pathname = '/' }) => {
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs');
  const facts = await fetchEntriesForContentType({ content_type: 'fact' });
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');
  const heroEntry = await fetchEntryById('22WQgsUiA48Q8eIKaWMaU8');
  const heroAsset = await fetchAssetById(
    heroEntry.fields.backgroundImage.sys.id
  );
  const people = await fetchEntriesForContentType({
    content_type: 'person',
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
    heroAsset,
    heroEntry,
    pathname,
    people,
    projects
  };
};

export default HomePage;
