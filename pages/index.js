import React from 'react';
import { App } from '../components';
import contentfulClient from '../utils/contentfulClient';

const HomePage = ({ data }) => (
  <App>
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

HomePage.getInitialProps = async () => {
  const data = await contentfulClient.getEntries({
    content_type: 'hero',
    limit: 1,
    order: '-sys.createdAt'
  });

  return { data };
};

export default HomePage;
