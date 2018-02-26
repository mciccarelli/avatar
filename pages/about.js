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

const AboutPage = ({ contact, pageData, footer, pathname }) => {
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

AboutPage.getInitialProps = async ({ pathname = '/about' }) => {
  const contact = await fetchEntryById('6jLNWdukXSisiIwEq6cEQs');
  const footer = await fetchEntryById('6G4U286BvaieYuWc4S0i2W');
  const aboutContainer = await fetchEntriesForContentType({
    content_type: 'pageContainer',
    ['sys.id']: '6EBHVuTglyWckAk6yce4Q0' // filter 'about' pageContainer only
  });

  return {
    contact,
    footer,
    pathname,
    pageData: aboutContainer[0]
  };
};

export default AboutPage;
