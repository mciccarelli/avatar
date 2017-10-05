import React from 'react'

// import stylesheet from 'styles/index.scss'
// or, if you work with plain css
// import stylesheet from 'styles/index.css'

import LogoSM from '../svgs/avatar-logo.svg'
import LogoLG from '../svgs/avatar-logo-plus.svg'

export default () =>
  <div>
    <div className="wrap">
      <section className="intro">  
        <div className="content">
          <LogoLG className="logo" />
          <h1>
            We are focused on making equity investments in
            both emerging and established companies which offer
            proprietary, branded and scalable solutions to the
            mental health and wellness crisis affecting our world.
          </h1>
        </div>
      </section>
      <section>  
        <div className="content">
          <h2>Key Areas of Interest:</h2>
          <p className="areas"> 
            Addiction, Anxiety and Depression , Fitness and Nutrition, Meditation and Mindfulness, Shame and Trauma, Spirituality
          </p>
          <h2>Contact:</h2>
          <p className="contact">
            Kenneth Vancini, CEO <br />
            o. 508 642 5800 m. 508 630 6879 <br />
            <a href="mailto:kvancini@avatarcompanies.com">kvancini@avatarcompanies.com</a>
          </p>
        </div>
      </section>
      <footer>
        <LogoSM />
        <p>
          <span>Avatar Companies, LLC</span>
          <span>12 East 49th Street, 38th fl.</span>
          <span>New York, New York 10017</span>
        </p>
      </footer>
    </div>
  </div>
