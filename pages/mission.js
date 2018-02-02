import React from 'react';
import { App, Contact, Hero, Facts, Leadership, Projects } from '../components';
import {
  fetchAssetById,
  fetchEntryById,
  fetchEntriesForContentType,
  fetchEntriesByType
} from '../api';

const MissionPage = ({ heroEntry, contact, footer }) => {
  return (
    <App contact={contact} footer={footer}>
      <Hero entry={heroEntry} />
      <Contact entry={contact} />
    </App>
  );
};

MissionPage.getInitialProps = async () => {
  const heroEntry = await fetchEntryById('5rKoratd8AUKkK8oYCKGUk');
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs');
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');

  return { heroEntry, contact, footer };
};

export default MissionPage;
