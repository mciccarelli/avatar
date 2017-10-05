import React from 'react'
import styled from 'styled-components'
import { mq } from '../styles'
import LogoSM from '../svgs/avatar-logo.svg'
import LogoLG from '../svgs/avatar-logo-plus.svg'

const Wrap = styled.div`
  overflow: hidden;
  text-align: center;
  section {
    min-height: 70vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:nth-child(1) {
      min-height: 100vh;
      position: relative;
    }          
  }
  .content {
    margin: 0 auto;
    max-width: var(--maxWidth);
    h2 {
      font-size: 1.5rem;
      font-weight: 200;
      display: block;
      margin-bottom: 0;
      ${ mq.medium`
        font-size: 2rem;
      ` }
    }
    p {
      font-size: 1.125rem;
      font-weight: 200;
      margin-top: 0;
      margin-bottom: 3.125rem;
      ${ mq.medium`
        font-size: 1.5rem;
      ` }
      &.about {
        font-size: 1.125rem;
        font-weight: 200;
        color: var(--accentColor);
        ${ mq.medium`
          font-size: 1.5rem;
        ` }
      }
      &.areas {
        opacity: 0.8;
      }
      &.contact {
        color: var(--accentColor);
        margin-bottom: 0;
      }
    }
    a {
      text-decoration: none;
      color: var(--accentColor);
      &:hover {
        opacity: 0.8;
      }
    }
  }
  footer {
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    span {
      color: var(--mediumGray);
      padding-right: 5px;
      display: block;
      ${ mq.medium`
        padding-right: 20px;
        display: inline-block;
      ` }
    }
  }
  .logo-lg {
    width: 100%;
    max-width: 1200px;
    height: auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -20%);
  }
  .logo-sm {
    margin: 0 auto 20px;
    max-width: 100px;
    height: auto;
    ${ mq.medium`
      max-width: 130px;
    ` }
  }
`

export default () => ( 
  <Wrap>
    <section className="intro">  
      <LogoLG className="logo-lg" />
      <div className="content">
        <p className="about">
          We are focused on making equity investments in
          both emerging and established companies which offer
          proprietary, branded and scalable solutions to the
          mental health and wellness crisis affecting our world.
        </p>
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
      <LogoSM className="logo-sm" />
      <p className="content">
        <span>Avatar Companies, LLC</span>
        <span>12 East 49th St, 38th fl.</span>
        <span>New York, NY 10017</span>
      </p>
    </footer>
  </Wrap>
)
