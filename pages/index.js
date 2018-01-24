import React from 'react';
import { App, Hero, Facts } from '../components';
import { fetchAssetById, fetchEntryById, fetchEntriesByType } from '../api';

const HomePage = ({ heroEntry, heroAsset, contact, footer }) => {
  if (!heroEntry || !contact || !footer) return;

  return (
    <App contact={contact} footer={footer}>
      <Hero entry={heroEntry} background={heroAsset} />
      <Facts />
    </App>
  );
};

HomePage.getInitialProps = async () => {
  const heroEntry = await fetchEntryById('22WQgsUiA48Q8eIKaWMaU8'); // homepage hero
  const heroAsset = await fetchAssetById(
    heroEntry.fields.backgroundImage.sys.id
  );
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs'); // contact section
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W'); // footer section

  return { heroEntry, heroAsset, contact, footer };
};

export default HomePage;
