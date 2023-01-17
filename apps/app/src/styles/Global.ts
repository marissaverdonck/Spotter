import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Playfair-Display';
  src: url('/fonts/PlayfairDisplay-Black.ttf');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Ubuntu-Bold';
  src: url('/fonts/Ubuntu-Bold.ttf');
}

@font-face {
  font-family: 'Ubuntu-Light';
  src: url('/fonts/Ubuntu-Light.ttf');
}

@font-face {
  font-family: 'Ubuntu-Regular';
  src: url('/fonts/Ubuntu-Regular.ttf');
}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
		padding:0;
    width:100%;
    min-height:100%;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.backgroundColor};
    font-size: ${theme.sizes.fontSizeXS};
    color: ${theme.colors.textColorDark};

  }

  h1 {
    font-family: ${theme.fonts.title};
    font-size: ${theme.sizes.fontSizeM};
    color: ${theme.colors.textColorDark};
  }

  h2 {
    font-family: ${theme.fonts.logo};
    font-size: ${theme.sizes.fontSizeS};
    color: ${theme.colors.textColorDark};
    text-transform: uppercase;
  }

  h3 {
    font-family: ${theme.fonts.bodyBold};
    font-size: ${theme.sizes.fontSizeXS};
    color: ${theme.colors.textColorDark};
  }

  p{
    font-family: ${theme.fonts.body};
    font-size: ${theme.sizes.fontSizeXS};
    color: ${theme.colors.textColorDark};
    /* font-style: italic; */

  }
  button{
    font-family: ${theme.fonts.body};
    font-size: ${theme.sizes.fontSizeXS};
    background-color: ${theme.colors.orange};
    color: ${theme.colors.textColorLight};
  }

`;

export default GlobalStyle;
