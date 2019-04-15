import { createGlobalStyle } from 'styled-components'
import { colorSchemes } from './colorSchemes';

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: ${props => props.theme.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.text};
  }
  a {
    color: ${props => props.theme.links};
    text-decoration: none;
  }
`

GlobalStyle.defaultProps = {
  ...colorSchemes[0]
}

console.log(GlobalStyle.defaultProps);


export default GlobalStyle