import React from 'react'
import ss from './index.sass'
import LogoSM from '../svgs/avatar-logo.svg'
import LogoLG from '../svgs/avatar-logo-plus.svg'

export const IndexPage = () => (
  <div className={ss.example}>
    <LogoLG />
    <h2>
      H2
    </h2>
    <h6>
      H6
    </h6>
    <p>
      This is ans exasmplse fsromscoped style in a outside CSS file {'<3'}
    </p>
    <LogoSM />
  </div>
)

export default IndexPage
