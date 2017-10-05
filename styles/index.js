import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
 
export default () => injectGlobal`
  ${styledNormalize}
  @font-face {
    font-family: 'Conduit';
    src: url('../static/fonts/ConduitExLtITCTT.eot');
    src: url('../static/fonts/ConduitExLtITCTT.eot?#iefix') format('embedded-opentype'),
      url('../static/fonts/ConduitExLtITCTT.woff2') format('woff2'),
      url('../static/fonts/ConduitExLtITCTT.woff') format('woff'),
      url('../static/fonts/ConduitExLtITCTT.ttf') format('truetype'),
      url('../static/fonts/ConduitExLtITCTT.svg#ConduitExLtITCTT') format('svg');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Conduit';
    src: url('../static/fonts/ConduitMdITCTTMedium.eot');
    src: url('../static/fonts/ConduitMdITCTTMedium.eot?#iefix') format('embedded-opentype'),
      url('../static/fonts/ConduitMdITCTTMedium.woff2') format('woff2'),
      url('../static/fonts/ConduitMdITCTTMedium.woff') format('woff'),
      url('../static/fonts/ConduitMdITCTTMedium.ttf') format('truetype'),
      url('../static/fonts/ConduitMdITCTTMedium.svg#ConduitMdITCTTMedium') format('svg');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Conduit';
    src: url('../static/fonts/ConduitExBdITCTT.eot');
    src: url('../static/fonts/ConduitExBdITCTT.eot?#iefix') format('embedded-opentype'),
      url('../static/fonts/ConduitExBdITCTT.woff2') format('woff2'),
      url('../static/fonts/ConduitExBdITCTT.woff') format('woff'),
      url('../static/fonts/ConduitExBdITCTT.ttf') format('truetype'),
      url('../static/fonts/ConduitExBdITCTT.svg#ConduitExBdITCTT') format('svg');
    font-weight: 700;
  }

  :root {
    --accentColor: #006CB7;
    --mediumGray: #86888A;
    --lightGray: #DCDDDE;
    --baseFontFamily: 'Conduit', 'Trebuchet MS', Helvetica, sans-serif;
    --maxWidth: 640px;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    font: 1rem/1.5 var(--baseFontFamily);
    color: var(--mediumGray);
  }
`