import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { injectGlobal } from "styled-components";
import paris from "./images/paris.jpg";

// import styles
import { media, font } from "./styles/responsive.styled";
//import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById("root"));

injectGlobal`
*{ 
  margin:0px;
  padding:0px;
  box-sizing: border-box !important;
  };
h1, h2{ 
  color:white;
  }

a{ 
  text-decoration: none;
  color:white;}

html, body,{
  width:100%;
  height:100%;
  }
body{
  background-image: url(${paris});
  ${media.desktopL`
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  `}
  ${media.desktop`
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  `}
  ${media.iphonePlus`
    background-size:cover;
    background-position:bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
  `}

}
  h1{
    ${media.desktop`
      font-size:${font.h1.desktop};
    `}
    ${media.iphonePlus`
      font-size:${font.h1.phone};
    `}
  }
`;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//
