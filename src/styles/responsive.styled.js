import { css } from 'styled-components';

const sizes = {
    desktopL: 2040,
    desktop: 1440,
    tablet: 768,

    /* iPhone 6, 7, 8 -- */
    iphone: 375,
    
    /* iPhone 6+, 7+, 8+ -- */
    iphonePlus:414
  };
  
  // Iterate through the sizes and create a media template
  export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
       @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
   
    return acc
}, {})


  export const font = {
      h1 :{ 
          phone :"2em",
          tablet: {sm:"2em", lg: "2.5em"},
          desktop: "3em",   
         },
      h2 :{
          phone: "1.625em",
          tablet: {sm:"2em", lg: "2.5em"},
          desktop: "2.25em",
      },
      h3 :{
        phone: "1.625em",
        tablet: {sm:"1.5em", lg: "1.375em"},
        desktop: "1.75em",
    },
      body:{
        phone: "1em",
        tablet: "1em",
        desktop: "1em"
      }

  }
    ;



