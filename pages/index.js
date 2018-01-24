import React from 'react';
import { App, Hero } from '../components';
import { fetchAssetById, fetchEntryById, fetchEntriesByType } from '../api';

const HomePage = ({ heroEntry, heroAsset, contact, footer }) => {
  if (!heroEntry || !contact || !footer) return;

  return (
    <App contact={contact} footer={footer}>
      <Hero entry={heroEntry} background={heroAsset} />
      <section className="intro">
        <div className="content">
          <p className="about">
            Avatar Companies is a private partnership focused on making equity
            investments in the emerging fields of mental health and wellness.
          </p>
        </div>
      </section>
      <section>
        <div className="content">
          <h2>Key Areas of Interest:</h2>
          <p className="areas">
            Addiction, Anxiety and Depression, Fitness and Nutrition, Meditation
            and Mindfulness, Shame and Trauma, Spirituality
          </p>
          <h2>Contact:</h2>
          <p className="contact">
            Kenneth Vancini, CEO <br />
            o. <a href="tel:1-508-642-5800">1-508-642-5800</a>
            <br />
            m. <a href="tel:1-508-630-6879">1-508-630-6879</a>
            <br />
            <a href="mailto:kvancini@avatarcompanies.com">
              kvancini@avatarcompanies.com
            </a>
          </p>
        </div>
      </section>
      <footer>
        <p className="content">
          <span>Avatar Companies, LLC</span>
          <span>12 East 49th St, 38th fl.</span>
          <span>New York, NY 10017</span>
        </p>
      </footer>
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
