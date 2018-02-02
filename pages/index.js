import React from 'react';
import { App, Contact, Hero, Facts, Leadership, Projects } from '../components';
import {
  fetchAssetById,
  fetchEntryById,
  fetchEntriesForContentType,
  fetchEntriesByType
} from '../api';

const HomePage = ({
  heroEntry,
  heroAsset,
  facts,
  people,
  projects,
  contact,
  footer
}) => {
  const { fields: { file: { url: heroHackground } } } = heroAsset;
  return (
    <App contact={contact} footer={footer}>
      <Hero entry={heroEntry} background={heroHackground} homepage={true} />
      <Facts items={facts} />
      <Leadership items={people} />
      <Facts items={facts} />
      <Projects items={projects} />
      <Contact entry={contact} />
    </App>
  );
};

HomePage.getInitialProps = async () => {
  const heroEntry = await fetchEntryById('22WQgsUiA48Q8eIKaWMaU8');
  const heroAsset = await fetchAssetById(
    heroEntry.fields.backgroundImage.sys.id
  );
  const facts = await fetchEntriesForContentType('fact');
  const people = await fetchEntriesForContentType('person', 5, 'sys.createdAt');
  const projects = await fetchEntriesForContentType(
    'project',
    5,
    'sys.createdAt'
  );
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs');
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');

  return { heroEntry, heroAsset, facts, people, projects, contact, footer };
};

export default HomePage;
