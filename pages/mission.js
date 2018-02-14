import React from 'react';
import { App, Contact, Hero, Facts, Leadership, Projects } from '../components';
import {
  fetchAssetById,
  fetchEntryById,
  fetchEntriesForContentType,
  fetchEntriesByType
} from '../api';

const MissionPage = ({ contact, footer, heroEntry, pathname }) => {
  return (
    <App contact={contact} footer={footer} pathname={pathname}>
      <Hero entry={heroEntry} />
      <Contact entry={contact} />
    </App>
  );
};

MissionPage.getInitialProps = async ({ pathname = '/mission' }) => {
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs');
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');
  const heroEntry = await fetchEntryById('5rKoratd8AUKkK8oYCKGUk');

  return { contact, footer, heroEntry, pathname };
};

export default MissionPage;
