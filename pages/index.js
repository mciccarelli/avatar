import React from 'react'
import styled, { css } from 'styled-components'
import LogoSM from '../svgs/avatar-logo.svg'
import LogoLG from '../svgs/avatar-logo-plus.svg'

const mq = {
  medium: (...args) => css`
    @media (min-width: 500px) {
      ${ css(...args) }
    }
  `
}

const Wrap = styled.div`
  overflow: hidden;
  section {
    width: 100%;
    padding: 0 7%;
    display: table;
    margin: 0;
    max-width: none;
    height: 100vh;
    position: relative;
    &.intro {
      height: 80vh;
      ${ mq.medium`
        transform: translateY(-20%);
      ` }
    }
    .logo {
      transform: translateX(18vw);
      width: 80vw;
      height: auto;
      margin-bottom: 10px;
      ${ mq.medium`
        margin-bottom: 30px;
      ` }
    }
  }

  .content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    h1 {
      font-size: 1.5rem;
      font-weight: 200;
      text-indent: 1.25rem;
      color: var(--accentColor);
      ${ mq.medium`
        font-size: 2rem;
      ` }
    }
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
      font-size: 1rem;
      font-weight: 200;
      text-align: center;
      margin-top: 0;
      margin-bottom: 1.875rem;
      ${ mq.medium`
        font-size: 1.5rem;
      ` }
      &.areas {
        opacity: 0.75;
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

  .contain {
    margin-left: auto;
    margin-right: auto;
    max-width: var(--maxWidth);
  }
    
  footer {
    padding: 1% 5% 10%;
    text-align: center;
    svg {
      max-width: 150px;
      height: auto;
      ${ mq.medium`
        max-width: auto;
      ` }
    }
    span {
      padding-right: 5px;
      display: block;
      ${ mq.medium`
        padding-right: 20px;
        display: inline-block;
      ` }
    }
  }
`

export default () => ( 
  <Wrap>
    <section className="intro">  
      <div className="content">
        <LogoLG className="logo" />
        <h1 className="contain">
          We are focused on making equity investments in
          both emerging and established companies which offer
          proprietary, branded and scalable solutions to the
          mental health and wellness crisis affecting our world.
        </h1>
      </div>
    </section>
    <section>  
      <div className="content">
        <div className="contain">
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
      </div>
    </section>
    <footer>
      <LogoSM />
      <p className="contain">
        <span>Avatar Companies, LLC</span>
        <span>12 East 49th Street, 38th fl.</span>
        <span>New York, New York 10017</span>
      </p>
    </footer>
  </Wrap>
)
