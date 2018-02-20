import React from 'react';
import {
  App,
  Contact,
  Hero,
  Facts,
  Leadership,
  Projects,
  Section
} from '../components';
import {
  fetchAssetById,
  fetchEntryById,
  fetchEntriesForContentType,
  fetchEntriesByType
} from '../api';

const MissionPage = ({ contact, pageData, footer, pathname }) => {
  const { fields: { hero: { fields: heroFields }, modules } } = pageData;
  return (
    <App contact={contact} footer={footer} pathname={pathname}>
      <Hero {...heroFields} />
      {modules &&
        modules.map(section => {
          const { fields, sys: { id } } = section;
          return <Section key={id} {...fields} />;
        })}
      <Contact entry={contact} />
    </App>
  );
};

MissionPage.getInitialProps = async ({ pathname = '/mission' }) => {
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs');
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');
  const missonContainer = await fetchEntriesForContentType({
    content_type: 'pageContainer',
    ['sys.id']: '6EBHVuTglyWckAk6yce4Q0' // filter 'mission' pageContainer only
  });

  return {
    contact,
    footer,
    pathname,
    pageData: missonContainer[0]
  };
};

export default MissionPage;
