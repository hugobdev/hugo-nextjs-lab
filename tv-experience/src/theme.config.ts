import {createCss} from '@stitches/react';

export const {styled, css, global, keyframes, getCssString, theme} = createCss({
  theme: {
    colors: {
      coolgray900: 'hsla(222, 36%, 11%, 1)',
      coolgray400: 'hsla(219, 9%, 65%, 1)',
      coolgray50: 'hsla(210, 20%, 98%, 1)',
      'coolgray900-7': 'hsla(222, 36%, 11%, 0.7)',
    },
    fonts: {
      sans: 'Inter, -apple-system, system-ui, sans-serif',
    },
    fontSizes: {
      medium: '24px',
      large: '36px',
      'x-large': '48px',
      'xx-large': '72px',
    },
    fontWeights: {
      medium: 500,
      bold: 700,
    },
    space: {
      'x-small': '5px',
      small: '10px',
      medium: '20px',
      large: '30px',
    },
  },
});
