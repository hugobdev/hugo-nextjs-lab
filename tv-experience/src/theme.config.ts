import {createCss} from '@stitches/react';
import {grayDark, greenDark, blackA, whiteA} from '@radix-ui/colors';

export let {styled, css, global, keyframes, getCssString, theme} = createCss({
  theme: {
    colors: {
      ...grayDark,
      ...greenDark,
      ...blackA,
      ...whiteA,
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
      'x-large': '60px',
      'xx-large': '120px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      min: '1',
      max: '999',
    },
    radii: {
      small: '5px',
      medium: '15px',
      large: '25px',
      pill: '999px',
    },
  },
});
