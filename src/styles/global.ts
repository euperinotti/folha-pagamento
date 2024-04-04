import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.font.family.heebo};
      font-size: ${theme.font.sizes.large};
      background-color: ${theme.colors.black};
      overflow-x: hidden;
    }

    p {
      line-height: 25px;
    }
`

export default GlobalStyles
