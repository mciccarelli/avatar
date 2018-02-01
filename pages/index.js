import React from 'react';
import { App, Hero, Facts, Leadership } from '../components';
import {
  fetchAssetById,
  fetchEntryById,
  fetchEntriesForContentType,
  fetchEntriesByType
} from '../api';

const HomePage = ({ heroEntry, heroAsset, facts, people, contact, footer }) => {
  return (
    <App contact={contact} footer={footer}>
      <Hero entry={heroEntry} background={heroAsset} />
      <Facts items={facts} />
      <Leadership items={people} />
    </App>
  );
};

HomePage.getInitialProps = async () => {
  const heroEntry = await fetchEntryById('22WQgsUiA48Q8eIKaWMaU8'); // homepage hero
  const heroAsset = await fetchAssetById(
    heroEntry.fields.backgroundImage.sys.id
  ); // homepage hero BG
  const facts = await fetchEntriesForContentType('fact'); // facts slider
  const people = await fetchEntriesForContentType('person', 3, 'sys.createdAt'); // leadership section
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs'); // contact section
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W'); // footer section

  return { heroEntry, heroAsset, facts, people, contact, footer };
};

export default HomePage;
